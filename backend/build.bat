@echo off
echo Building Flotila Praha Backend for production...
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

REM Build for Windows
echo Building for Windows...
go build -o fleet-backend.exe main.go

REM Build for Linux
echo Building for Linux...
set GOOS=linux
set GOARCH=amd64
go build -o fleet-backend-linux main.go

echo.
echo Build complete!
echo Windows: fleet-backend.exe
echo Linux: fleet-backend-linux
echo.
echo To run in production:
echo   Windows: fleet-backend.exe
echo   Linux: ./fleet-backend-linux
echo.
pause