@echo off
echo Installing dependencies for all microfrontend applications...

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
echo ✅ All dependencies installed successfully!
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
