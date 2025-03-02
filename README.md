# Music Ecommerce Webapp - Frontend

Welcome to the frontend of the Music Ecommerce Webapp! This project is a **MERN stack** application where we sell and rent music instruments and accessories. The frontend is built with **React** and **Redux** to manage the state and user interface.

## Features
- User-friendly interface to browse and purchase/rent music instruments and accessories.
- Product listings with options to filter by category, price, and more.
- User authentication (login/signup) for account management.
- Secure payment integration for purchases and rentals.

## Setup

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js (v12 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/music-ecommerce-frontend.git
   cd music-ecommerce-frontend
Install dependencies:

bash
Copy
npm install
# or if you're using yarn
yarn install
Set up environment variables:

Create a .env file at the root of the project and add the following variables:

env
Copy
REACT_APP_API_URL=http://localhost:5000/api  # URL of the backend API
REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
Running the Application
To start the development server:

bash
Copy
npm start
# or if you're using yarn
yarn start
This will start the frontend on http://localhost:3000.

Directory Structure
src/components/ - Reusable UI components (buttons, form elements, etc.)
src/pages/ - Pages representing different views (Home, Product, Checkout, etc.)
src/redux/ - Redux slices and store configuration for state management
src/assets/ - Images, icons, and other static assets
src/utils/ - Helper functions, API calls, etc.
Future Updates
Admin View: A well-managed admin panel will be added to help admins manage products, orders, and users.
Rental System Update: A more refined rental system for better user experience and management.