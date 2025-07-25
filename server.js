const fs = require('fs');
const http = require('http');
const https = require('https');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// HTTPS certs from Let's Encrypt
const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/flotila-praha.eu/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/flotila-praha.eu/fullchain.pem'),
};

// Start Next.js app
app.prepare().then(() => {
  // 🔒 HTTPS server (port 443)
  https.createServer(httpsOptions, (req, res) => {
    handle(req, res);
  }).listen(443, () => {
    console.log('✅ HTTPS server running at https://flotila-praha.eu');
  });

  // 🔁 HTTP server (port 80) with redirect to HTTPS
  http.createServer((req, res) => {
    const host = req.headers.host.replace(/:\d+$/, ''); // remove port
    res.writeHead(301, {
      Location: `https://${host}${req.url}`
    });
    res.end();
  }).listen(80, () => {
    console.log('🔁 HTTP redirect server running at http://flotila-praha.eu');
  });
});
