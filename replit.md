# Gaza Relief Organizations Directory

## Overview

This is a full-stack web application that connects donors with verified charitable organizations providing humanitarian aid to Gaza. The application serves as a trusted directory featuring established charities with proven track records in Palestinian relief efforts.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 29, 2025)

✓ Fixed all LSP diagnostics and technical issues
✓ Updated MATW Project with correct mosque icon (Building2) replacing church symbol
✓ Changed MATW Project button color to white with proper contrast
✓ Removed search functionality and quick donation section as requested
✓ Added Islamic Relief Worldwide to verified organizations list
✓ Configured for Vercel deployment with proper framework detection
✓ **Implemented military-grade security features:**
  - IP address masking with SHA-256 encryption
  - Advanced rate limiting (50 requests/15min per masked IP)
  - Comprehensive security headers (CSP, HSTS, XSS protection)
  - Input sanitization and XSS prevention
  - Anti-bot and anti-scraping protection
  - Enhanced logging with privacy protection
  - Production-ready CORS configuration
✓ Created security documentation and deployment guides
✓ Verified build process works correctly (frontend + backend bundle)
✓ Dark theme successfully implemented throughout the app

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: REST API with JSON responses
- **Request Handling**: Express middleware for JSON parsing and logging
- **Error Handling**: Centralized error middleware with structured responses

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle ORM)
- **ORM**: Drizzle ORM with schema-first approach
- **Development Storage**: In-memory storage with seeded data
- **Database Provider**: Neon serverless PostgreSQL (indicated by @neondatabase/serverless)

## Key Components

### Database Schema
- **Organizations Table**: Stores charity information including name, description, contact details, verification status
- **Contact Messages Table**: Stores user inquiries and contact form submissions
- **Shared Schema**: Type-safe schema definitions using Drizzle Zod integration

### UI Components
- **Organization Cards**: Display charity information with contact details and donation links
- **Contact Forms**: User inquiry submission with validation
- **Navigation**: Responsive navigation with mobile support
- **Trust Indicators**: Visual verification badges and security information

### Business Logic
- **Organization Management**: CRUD operations for charity listings
- **Contact Management**: Message submission and storage
- **Verification System**: Trust indicators and verified organization badges

## Data Flow

1. **Frontend Request**: User interactions trigger API calls via TanStack Query
2. **API Layer**: Express routes handle requests and validate data using Zod schemas
3. **Storage Layer**: Drizzle ORM manages database operations (currently using in-memory storage for development)
4. **Response**: Structured JSON responses with proper error handling
5. **UI Updates**: TanStack Query handles caching and UI state updates

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL for production
- **UI Library**: Radix UI primitives via shadcn/ui
- **Validation**: Zod for runtime type checking
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date formatting
- **Styling**: Tailwind CSS with PostCSS

### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Build Tools**: Vite with React plugin and runtime error overlay
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Production Deployment (Vercel)
- **Platform**: Vercel with React framework detection
- **Node Version**: 18.x (configured for Vercel compatibility)
- **Build Process**: 
  - Frontend: Vite build to `dist/public`
  - Backend: esbuild bundle to `dist/index.js`
- **Routing Strategy**:
  - API routes (`/api/*`) → serverless function at `/server/index.ts`
  - Static routes (`/*`) → static files in `/dist/public`
- **Environment**: Node.js serverless functions with 10-second timeout
- **Framework Detection**: Set to "react" in vercel.json for proper deployment

### Development Environment
- **Hot Reload**: Vite dev server with HMR
- **API Proxy**: Development server proxies API requests
- **Database**: Local development with migration support via Drizzle Kit
- **Error Handling**: Runtime error overlay for development debugging

### Key Architectural Decisions

1. **Monorepo Structure**: Shared types and schemas between frontend/backend for type safety
2. **Memory Storage**: Development uses in-memory storage with seeded data for rapid iteration
3. **Component Library**: shadcn/ui provides consistent, accessible UI components
4. **Server-Side Rendering**: Static generation for optimal performance and SEO
5. **API Design**: RESTful endpoints with proper HTTP status codes and error handling

The application prioritizes user trust through verified organization listings, secure donation flows, and transparent information about each charity's impact and legitimacy.