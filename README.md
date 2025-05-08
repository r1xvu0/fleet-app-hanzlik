# Prague Fleet Web Application

A modern, responsive web application for Prague Fleet's car rental and ride-sharing services. Built with Next.js and Tailwind CSS, this application provides information and booking capabilities for drivers interested in working with various delivery and transportation platforms.

## Project Overview

The Prague Fleet web application offers:

- Information about car rental and vehicle options
- Ride-sharing and food delivery partnership opportunities
- Earnings calculators for different platforms (Bolt, Uber, Wolt, etc.)
- Contact form for inquiries and registrations
- Multilingual support for Czech, Slovak, and English speakers

## Application Structure

The project follows Next.js App Router architecture:

```
src/
├── app/                    # Pages using App Router
│   ├── api/                # API routes (server components)
│   │   └── contact/        # Contact form handling
│   │   └── about/          # About page
│   │   └── cars/           # Available cars page
│   │   └── contact/        # Contact page
│   │   └── bolt/           # Bolt partnership page
│   │   └── uber/           # Uber partnership page
│   │   └── ...             # Other platform pages
│   ├── components/         # Reusable React components
│   │   ├── ContactSection.js   # Contact form component
│   │   ├── Navbar.js           # Navigation bar
│   │   ├── EarningsCalculator.js # Calculator for earnings
│   │   ├── Layout.js           # Main layout component
│   │   └── ...                 # Other components
│   └── public/             # Static assets
└── ...
```

## Key Features

### 1. Platform Integration

Detailed information and onboarding for multiple ride-sharing and delivery platforms:
- Uber
- Bolt
- Wolt
- Foodora
- Bolt Food

### 2. Car Rental Information

Comprehensive details about available vehicles:
- Car models and specifications
- Rental terms and conditions
- Pricing options

### 3. Earnings Calculators

Interactive calculators to estimate potential earnings:
- Food delivery earnings estimation
- Ride-sharing earnings projection
- Customizable parameters (hours, trips, etc.)

### 4. Contact Form

Fully functional contact form with:
- Multiple language support
- Form validation
- Backend integration with mailer service
- Success/error notifications

### 5. Responsive Design

Mobile-first design approach using Tailwind CSS:
- Adapts to all screen sizes (mobile, tablet, desktop)
- Modern UI with interactive elements
- Accessibility considerations

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Deployments**: Vercel-ready configuration
- **State Management**: React hooks
- **Form Handling**: Custom validation with React hooks
- **API Integration**: Fetch API with backend mailer service

## API Routes

### Contact Form API

```
POST /api/contact
```

Handles contact form submissions and forwards them to the mailer backend service.

**Request Body:**
```json
{
  "name": "Jan Novák",
  "email": "jan@example.com",
  "nationality": "CZ",
  "phoneNumber": "+420 123 456 789",
  "languages": ["cs", "en"],
  "message": "I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Zpráva byla úspěšně odeslána!"
}
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/fleet-app-hanzlik.git

# Navigate to the project directory
cd fleet-app-hanzlik

# Install dependencies
npm install
```

### Development

```bash
# Start the development server with hot reload
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Backend Integration

This application relies on the Fleet Mailer Service for contact form processing:

1. Make sure the mailer service is running at http://localhost:8080
2. The form submission is configured to send data to `/api/mail/contact` endpoint
3. Proper error handling is implemented for cases when the service is unavailable

## Customization

### Styling

The application uses Tailwind CSS for styling. The main configuration is in:
- `tailwind.config.js` - Theme and plugin configuration
- `globals.css` - Global styles and custom utilities

### Adding New Pages

1. Create a new directory in `src/app/` for the page
2. Add a `page.js` file with the page content
3. The new page will be automatically accessible at the corresponding URL

## Deployment

The application is ready to be deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Set up the required environment variables
3. Deploy with a single click

For other hosting providers, build the application with `npm run build` and serve the `out` directory.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.
