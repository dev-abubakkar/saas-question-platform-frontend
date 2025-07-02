@echo off
echo 🧹 Cleaning all dependencies and lock files...

echo.
echo [1/6] Cleaning root directory...
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"

echo.
echo [2/6] Cleaning Shell app...
cd apps\shell
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"
cd ..\..

echo.
echo [3/6] Cleaning Question Builder...
cd apps\question-builder
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"
cd ..\..

echo.
echo [4/6] Cleaning Paper Builder...
cd apps\paper-builder
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"
cd ..\..

echo.
echo [5/6] Cleaning Admin Panel...
cd apps\admin-panel
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"
cd ..\..

echo.
echo [6/6] Clearing npm cache...
call npm cache clean --force

echo.
echo ✅ All cleaned! Now installing fresh dependencies...
echo.

echo [1/5] Installing root dependencies...
call npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo ❌ Failed to install root dependencies
    pause
    exit /b 1
)

echo.
echo [2/5] Installing Shell app dependencies...
cd apps\shell
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ❌ Failed to install Shell dependencies
    cd ..\..
    pause
    exit /b 1
)
cd ..\..

echo.
echo [3/5] Installing Question Builder dependencies...
cd apps\question-builder
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ❌ Failed to install Question Builder dependencies
    cd ..\..
    pause
    exit /b 1
)
cd ..\..

echo.
echo [4/5] Installing Paper Builder dependencies...
cd apps\paper-builder
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ❌ Failed to install Paper Builder dependencies
    cd ..\..
    pause
    exit /b 1
)
cd ..\..

echo.
echo [5/5] Installing Admin Panel dependencies...
cd apps\admin-panel
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo ❌ Failed to install Admin Panel dependencies
    cd ..\..
    pause
    exit /b 1
)
cd ..\..

echo.
echo 🎉 All dependencies installed successfully!
echo.
echo To start development:
echo npm run dev
echo.
echo Individual app URLs:
echo - Shell (main): http://localhost:3000
echo - Question Builder: http://localhost:3001
echo - Paper Builder: http://localhost:3002
echo - Admin Panel: http://localhost:3003
pause
