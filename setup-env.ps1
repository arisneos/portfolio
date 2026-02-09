# setup-env.ps1
# Script to setup environment variables and install dependencies

Write-Host "Setting up environment..."

# Check if yarn is installed
if (!(Get-Command yarn -ErrorAction SilentlyContinue)) {
    Write-Host "Yarn not found. Installing via npm..."
    npm install -g yarn
}

Write-Host "Installing dependencies..."
yarn install

Write-Host "Starting development server..."
yarn dev
