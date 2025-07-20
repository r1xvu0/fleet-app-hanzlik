@echo off
echo Starting Flotila Praha Backend...
echo.

REM Check if Go is installed
go version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Go is not installed or not in PATH
    echo Please install Go from https://golang.org/dl/
    pause
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
go mod tidy

REM Start the server
echo.
echo Starting server on http://localhost:8080
echo Admin panel: http://localhost:8080/admin
echo Default credentials: admin / admin123
echo.
echo Press Ctrl+C to stop the server
echo.

go run main.go