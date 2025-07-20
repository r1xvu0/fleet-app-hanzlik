#!/bin/bash

echo "Starting Flotila Praha Backend..."
echo

# Check if Go is installed
if ! command -v go &> /dev/null; then
    echo "Error: Go is not installed or not in PATH"
    echo "Please install Go from https://golang.org/dl/"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
go mod tidy

# Start the server
echo
echo "Starting server on http://localhost:8080"
echo "Admin panel: http://localhost:8080/admin"
echo "Default credentials: admin / admin123"
echo
echo "Press Ctrl+C to stop the server"
echo

go run main.go