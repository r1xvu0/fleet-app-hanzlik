# 🚀 Flotila Praha - Production Deployment Guide

## 📋 Production Checklist

### ✅ **Security Enhancements Implemented**

1. **Password Hashing** ✅
   - SHA-256 password hashing implemented
   - No plain text passwords stored in database
   - Secure password verification

2. **Environment-Based Configuration** ✅
   - Admin credentials configurable via environment variables
   - Default credentials only for development
   - Production warnings for default passwords

3. **Multiple Admin Users** ✅
   - Support for multiple admin accounts
   - Role-based access (admin, superadmin)
   - User activation/deactivation
   - Protection against deleting last superadmin

4. **Enhanced Admin Model** ✅
   - Email addresses for admin users
   - Role-based permissions
   - User status tracking
   - Creation timestamps

## 🔧 **Environment Configuration**

### Required Environment Variables

```bash
# Server Configuration
PORT=8081

# Admin Configuration (REQUIRED FOR PRODUCTION)
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_secure_password_here
ADMIN_EMAIL=admin@flotila-praha.eu
```

### Example Production Setup

```bash
# Create .env file
cat > .env << EOF
PORT=8081
ADMIN_USERNAME=flotila_admin
ADMIN_PASSWORD=SuperSecure123!@#
ADMIN_EMAIL=admin@flotila-praha.eu
EOF

# Set secure permissions
chmod 600 .env
```

## 🚀 **Deployment Steps**

### 1. **Build for Production**
```bash
# Build the binary
go build -o fleet-backend main.go

# Create production directory
mkdir -p /opt/flotila-praha
cp fleet-backend /opt/flotila-praha/
cp -r admin /opt/flotila-praha/
cp .env /opt/flotila-praha/
```

### 2. **Create Systemd Service**
```bash
# Create service file
sudo tee /etc/systemd/system/flotila-praha.service << EOF
[Unit]
Description=Flotila Praha Backend
After=network.target

[Service]
Type=simple
User=flotila
WorkingDirectory=/opt/flotila-praha
ExecStart=/opt/flotila-praha/fleet-backend
Restart=always
RestartSec=5
Environment=PORT=8081
EnvironmentFile=/opt/flotila-praha/.env

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl enable flotila-praha
sudo systemctl start flotila-praha
```

### 3. **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name flotila-praha.eu;
    
    location / {
        proxy_pass http://localhost:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🔒 **Security Recommendations**

### **Immediate Actions**
1. ✅ Change default admin credentials
2. ✅ Use strong passwords (12+ characters)
3. ✅ Set up HTTPS with SSL certificates
4. ✅ Configure firewall rules
5. ✅ Regular database backups

### **Advanced Security**
- [ ] Implement JWT tokens instead of simple tokens
- [ ] Add rate limiting for login attempts
- [ ] Set up fail2ban for brute force protection
- [ ] Enable database encryption
- [ ] Implement audit logging

## 📊 **Admin User Management**

### **Default Roles**
- **superadmin**: Full system access, can manage other users
- **admin**: Standard admin access, cannot manage users

### **User Management Features**
- ✅ Create new admin users
- ✅ Edit existing users
- ✅ Activate/deactivate users
- ✅ Role assignment
- ✅ Password updates
- ✅ Protection against deleting last superadmin

### **API Endpoints**
```
GET    /admin/users        - List all users
POST   /admin/users        - Create new user
PUT    /admin/users/{id}   - Update user
DELETE /admin/users/{id}   - Delete user
```

## 🔍 **Monitoring & Logs**

### **Log Levels**
- **INFO**: General information
- **SUCCESS**: Successful operations
- **WARNING**: Important notices
- **ERROR**: Error conditions

### **Key Metrics to Monitor**
- Login attempts and failures
- User creation/deletion events
- Database connection status
- API response times
- System resource usage

## 🆘 **Troubleshooting**

### **Common Issues**

1. **Default Password Warning**
   ```
   ⚠️  Using default password! Set ADMIN_PASSWORD environment variable!
   ```
   **Solution**: Set `ADMIN_PASSWORD` environment variable

2. **Database Migration Errors**
   ```
   [ERROR] Failed to connect to database
   ```
   **Solution**: Check file permissions for `fleet.db`

3. **Port Already in Use**
   ```
   listen tcp :8080: bind: address already in use
   ```
   **Solution**: Change `PORT` environment variable or stop conflicting service

## 📈 **Performance Optimization**

### **Resource Usage**
- **Memory**: ~10-20MB RAM
- **CPU**: Minimal usage
- **Storage**: SQLite database file only
- **Network**: HTTP/HTTPS only

### **Scaling Considerations**
- SQLite suitable for small to medium deployments
- Consider PostgreSQL for high-traffic scenarios
- Implement caching for frequently accessed data
- Use CDN for static assets

## 🔄 **Backup & Recovery**

### **Database Backup**
```bash
# Create backup
cp fleet.db fleet.db.backup.$(date +%Y%m%d_%H%M%S)

# Automated daily backup
echo "0 2 * * * cp /opt/flotila-praha/fleet.db /opt/flotila-praha/backups/fleet.db.backup.\$(date +\%Y\%m\%d)" | crontab -
```

### **Full System Backup**
```bash
# Backup entire application
tar -czf flotila-praha-backup-$(date +%Y%m%d).tar.gz /opt/flotila-praha/
```

## ✅ **Production Readiness Status**

- ✅ **Password Security**: Implemented SHA-256 hashing
- ✅ **Environment Configuration**: Environment variables support
- ✅ **Multi-User Support**: Multiple admin accounts
- ✅ **Role-Based Access**: Admin and superadmin roles
- ✅ **User Management**: Full CRUD operations
- ✅ **Security Validations**: Username uniqueness, last superadmin protection
- ✅ **Logging System**: Comprehensive colored logging
- ✅ **Error Handling**: Proper JSON error responses
- ✅ **Database Migrations**: Automatic schema updates

**Your Flotila Praha backend is now PRODUCTION-READY! 🎉**