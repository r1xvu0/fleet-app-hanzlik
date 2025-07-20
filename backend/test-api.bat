@echo off
echo Testing Flotila Praha Backend API...
echo.

REM Start the server in background (this is just for demonstration)
echo Starting server...
echo You can test the API manually with these URLs:
echo.
echo API Endpoints:
echo   GET  http://localhost:8080/api/cars
echo   POST http://localhost:8080/api/contact
echo.
echo Admin Panel:
echo   http://localhost:8080/admin
echo   Username: admin
echo   Password: admin123
echo.
echo Press any key to start the server...
pause >nul

go run main.go