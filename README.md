# Full Stack Application

This project is a full stack web application developed with Angular for the frontend and Node.js for the backend, deployed on Vercel and [your_backend_service] for hosting the server. It includes authentication, CRUD operations, and interactive UI elements.

## Features

- User Authentication (Sign Up/Sign In/Sign Out)
- Employee Management (Create, Read, Update, Delete)
- Responsive Navbar that adjusts based on authentication state
- Secure API calls with JWT

## Technologies

- **Frontend**: Angular
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Hosting**: Frontend on Vercel, Backend on [your_backend_service]

## Project Structure

- `angular-frontend`: Contains the Angular application
- `server`: Contains the Node.js server application

### Frontend

Located in the `angular-frontend` directory. It's built with Angular and communicates with the backend server for authentication and employee management features.

### Backend

Located in the `server` directory. It's a RESTful API developed with Node.js and Express, providing endpoints for user and employee management. It uses MongoDB as the database.

## Installation and Setup

### Running the Frontend

1. Navigate to the `angular-frontend` directory.
2. Install dependencies: npm install
3. Start the Angular development server: ng serve
4. Open `http://localhost:4200` in your browser.

### Running the Backend

1. Navigate to the `server` directory.
2. Install dependencies: npm install
3. Start the Node.js server: node app.js

4. The API will be available at `http://localhost:3000`.

## Deployment

### Frontend on Vercel

1. Build your Angular app for production: ng build --prod
2. Deploy the `dist/angular-frontend` directory to Vercel.

### Backend on [your_backend_service]

1. Ensure all environment variables are set up in your hosting service.
2. Deploy the `server` directory according to your hosting service's documentation.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the `server` directory:

- `MONGO_URI` - Your MongoDB connection string.
- `JWT_SECRET` - A secret key for JWT token generation.
