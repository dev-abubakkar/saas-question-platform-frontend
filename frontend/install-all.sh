#!/bin/bash

echo "Installing dependencies for all microfrontend applications..."

echo ""
echo "[1/5] Installing root dependencies..."
npm install --legacy-peer-deps

if [ $? -ne 0 ]; then
    echo "❌ Failed to install root dependencies"
    exit 1
fi

echo ""
echo "[2/5] Installing Shell app dependencies..."
cd apps/shell
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "❌ Failed to install Shell dependencies"
    cd ../..
    exit 1
fi
cd ../..

echo ""
echo "[3/5] Installing Question Builder dependencies..."
cd apps/question-builder
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "❌ Failed to install Question Builder dependencies"
    cd ../..
    exit 1
fi
cd ../..

echo ""
echo "[4/5] Installing Paper Builder dependencies..."
cd apps/paper-builder
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "❌ Failed to install Paper Builder dependencies"
    cd ../..
    exit 1
fi
cd ../..

echo ""
echo "[5/5] Installing Admin Panel dependencies..."
cd apps/admin-panel
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "❌ Failed to install Admin Panel dependencies"
    cd ../..
    exit 1
fi
cd ../..

echo ""
echo "✅ All dependencies installed successfully!"
echo ""
echo "To start development:"
echo "npm run dev"
echo ""
echo "Individual app URLs:"
echo "- Shell (main): http://localhost:3000"
echo "- Question Builder: http://localhost:3001"
echo "- Paper Builder: http://localhost:3002"
echo "- Admin Panel: http://localhost:3003"
