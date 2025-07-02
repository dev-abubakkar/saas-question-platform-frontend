# Microfrontend Application

This is a microfrontend application built with Next.js as the shell and React applications as remote microfrontends using Webpack Module Federation.

## Architecture

- **Shell Application**: Next.js (Port 3000) - Main application that hosts other microfrontends
- **Question Builder**: React (Port 3001) - Microfrontend for creating and managing questions
- **Paper Builder**: React (Port 3002) - Microfrontend for building examination papers
- **Admin Panel**: React (Port 3003) - Microfrontend for user and system management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies for all applications:

\`\`\`bash
# Install root dependencies
npm install

# Install shell dependencies
cd apps/shell && npm install

# Install microfrontend dependencies
cd ../question-builder && npm install
cd ../paper-builder && npm install
cd ../admin-panel && npm install
\`\`\`

### Development

1. Start all applications in development mode:

\`\`\`bash
# From root directory
npm run dev
\`\`\`

This will start:
- Shell application on http://localhost:3000
- Question Builder on http://localhost:3001
- Paper Builder on http://localhost:3002
- Admin Panel on http://localhost:3003

2. Or start applications individually:

\`\`\`bash
npm run dev:shell
npm run dev:question-builder
npm run dev:paper-builder
npm run dev:admin-panel
\`\`\`

### Building for Production

\`\`\`bash
# Build all applications
npm run build

# Or build individually
npm run build:shell
npm run build:remotes
\`\`\`

## Features

### Shell Application
- Navigation between microfrontends
- SSR support with Next.js
- Responsive design with Tailwind CSS

### Question Builder
- Create multiple choice, true/false, and short answer questions
- Question bank management
- Real-time question preview

### Paper Builder
- Create examination papers with multiple sections
- Section-wise mark allocation
- Paper preview and management

### Admin Panel
- User management (add, activate/deactivate users)
- System statistics dashboard
- Role-based user administration

## Technology Stack

- **Frontend Framework**: Next.js (Shell), React (Microfrontends)
- **Module Federation**: Webpack Module Federation
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Webpack
- **Workspace Management**: Nx (optional)

## Module Federation Configuration

Each microfrontend exposes its main App component and shares React dependencies to ensure singleton instances across the application.

## Development Notes

- Each microfrontend runs independently and can be developed separately
- Shared dependencies (React, React-DOM) are configured as singletons
- The shell application dynamically imports microfrontends at runtime
- All applications use Tailwind CSS for consistent styling
