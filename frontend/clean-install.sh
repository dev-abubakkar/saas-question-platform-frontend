#!/bin/bash

echo "🧹 Cleaning all dependencies and lock files..."

echo ""
echo "[1/6] Cleaning root directory..."
rm -rf node_modules package-lock.json

echo ""
echo "[2/6] Cleaning Shell app..."
cd apps/shell
rm -rf node_modules package-lock.json
cd ../..

echo ""
echo "[3/6] Cleaning Question Builder..."
cd apps/question-builder
rm -rf node_modules package-lock.json
cd ../..

echo ""
echo "[4/6] Cleaning Paper Builder..."
cd apps/paper-builder
rm -rf node_modules package-lock.json
cd ../..

echo ""
echo "[5/6] Cleaning Admin Panel..."
cd apps/admin-panel
rm -rf node_modules package-lock.json
cd ../..

echo ""
echo "[6/6] Clearing npm cache..."
npm cache clean --force

echo ""
echo "✅ All cleaned! Now installing fresh dependencies..."
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
echo "🎉 All dependencies installed successfully!"
echo ""
echo "To start development:"
echo "npm run dev"
echo ""
echo "Individual app URLs:"
echo "- Shell (main): http://localhost:3000"
echo "- Question Builder: http://localhost:3001"
echo "- Paper Builder: http://localhost:3002"
echo "- Admin Panel: http://localhost:3003"
