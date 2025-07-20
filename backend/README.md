# Flotila Praha - Go Backend

Lightweight Go backend for the Flotila Praha fleet management application.

## Features

- **Contact Form API**: Handles contact form submissions from the frontend
- **Cars Management**: CRUD operations for managing fleet vehicles
- **Admin Interface**: Web-based admin panel for managing cars and viewing contact forms
- **SQLite Database**: Lightweight database for easy deployment
- **CORS Support**: Configured for frontend integration

## Quick Start

1. **Install Go** (version 1.21 or higher)

2. **Install dependencies**:
   ```bash
   cd backend
   go mod tidy
   ```

3. **Run the server**:
   ```bash
   go run main.go
   ```

4. **Access the application**:
   - API: `http://localhost:8080/api/`
   - Admin Panel: `http://localhost:8080/admin`

## Default Admin Credentials

- **Username**: `admin`
- **Password**: `admin123`

⚠️ **Important**: Change these credentials in production!

## API Endpoints

### Public API
- `POST /api/contact` - Submit contact form
- `GET /api/cars` - Get available cars
- `GET /api/cars/{id}` - Get specific car details

### Admin API
- `POST /admin/login` - Admin login
- `GET /admin/cars` - Get all cars
- `POST /admin/cars` - Create new car
- `PUT /admin/cars/{id}` - Update car
- `DELETE /admin/cars/{id}` - Delete car
- `GET /admin/contacts` - Get contact forms (with filtering)
- `PUT /admin/contacts/{id}` - Update contact status

## Database

The application uses SQLite with the following tables:
- `cars` - Vehicle information
- `contact_forms` - Contact form submissions
- `admins` - Admin users

Database file: `fleet.db` (created automatically)

## Environment Variables

- `PORT` - Server port (default: 8080)

## Frontend Integration

Update your Next.js environment variables:

```env
# .env.local
BACKEND_API_URL=http://localhost:8080
```

Then update your frontend API calls to use the backend URL instead of `/api/` routes.

## Production Deployment

1. **Build the binary**:
   ```bash
   go build -o fleet-backend main.go
   ```

2. **Run with environment variables**:
   ```bash
   PORT=8080 ./fleet-backend
   ```

3. **Security considerations**:
   - Change default admin credentials
   - Use proper authentication (JWT tokens)
   - Enable HTTPS
   - Secure database access
   - Add rate limiting

## Resource Usage

This Go backend is extremely lightweight:
- **Memory**: ~10-20MB RAM
- **CPU**: Minimal usage
- **Storage**: SQLite database file only
- **Dependencies**: Self-contained binary

Perfect for resource-constrained servers!