# Installation Guide

## Prerequisites

- Node.js 18+ 
- npm 8+

## Quick Installation

### Option 1: Automated Script (Recommended)

**Windows:**
\`\`\`bash
install-all.bat
\`\`\`

**Mac/Linux:**
\`\`\`bash
chmod +x install-all.sh
./install-all.sh
\`\`\`

### Option 2: Manual Installation

1. **Install root dependencies:**
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

2. **Install Shell app dependencies:**
\`\`\`bash
cd apps/shell
npm install --legacy-peer-deps
cd ../..
\`\`\`

3. **Install Question Builder dependencies:**
\`\`\`bash
cd apps/question-builder
npm install --legacy-peer-deps
cd ../..
\`\`\`

4. **Install Paper Builder dependencies:**
\`\`\`bash
cd apps/paper-builder
npm install --legacy-peer-deps
cd ../..
\`\`\`

5. **Install Admin Panel dependencies:**
\`\`\`bash
cd apps/admin-panel
npm install --legacy-peer-deps
cd ../..
\`\`\`

## Start Development

After successful installation:

\`\`\`bash
npm run dev
\`\`\`

This will start all applications:
- **Shell (main)**: http://localhost:3000
- **Question Builder**: http://localhost:3001
- **Paper Builder**: http://localhost:3002
- **Admin Panel**: http://localhost:3003

## Troubleshooting

### Common Issues

1. **Dependency conflicts**: Use `--legacy-peer-deps` flag
2. **Port conflicts**: Make sure ports 3000-3003 are available
3. **Node version**: Ensure you're using Node.js 18+

### Clean Installation

If you encounter issues, try a clean installation:

\`\`\`bash
# Clean all node_modules
npm run clean

# Reinstall everything
install-all.bat  # or install-all.sh on Mac/Linux
\`\`\`

### Individual App Development

You can also run individual apps:

\`\`\`bash
# Shell only
npm run dev:shell

# Question Builder only
npm run dev:question-builder

# Paper Builder only
npm run dev:paper-builder

# Admin Panel only
npm run dev:admin-panel
