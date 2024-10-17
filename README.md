# Expense Tracker

## Overview
The **Expense Tracker** is a full-stack web application designed to help users track their expenses and manage their finances efficiently. It features both a frontend for the user interface and a backend to manage the business logic and database.

## Features
- **Track Expenses**: Add, edit, and delete expenses.
- **View Reports**: Generate reports on spending habits.
- **User Authentication**: Secure login and account management.
- **Responsive Design**: Works well on both mobile and desktop devices.

## Project Structure
The project is divided into two main components:

1. **Backend**: Handles the server-side logic, including routing, database interactions, and API management.
2. **Frontend**: Manages the user interface and client-side functionality.

### Backend
The backend is built using Node.js with Express as the framework. It interacts with the database to manage expenses, user authentication, and other necessary operations.

**Key files and folders**:
- `app.js`: The main application logic.
- `index.js`: Entry point for the backend server.
- `controllers/`: Contains logic for managing routes like expenses and users.
- `models/`: Defines the database schema.
- `routes/`: Defines the API endpoints.
- `db/`: Handles database connections and queries.

**Dependencies**:
To install backend dependencies, navigate to the `backend` folder and run:
```bash
npm install
```
## Backend
To start the backend server, run:
```bash
npm start
```
## Frontend
# The frontend is a React-based single-page application. To start the frontend, follow these steps:
```bash
cd ../frontend
npm install
npm start
```
## Installation

 Prerequisites:
- Node.js and npm should be installed.
- MongoDB should be set up for the backend to interact with.

Clone the repository:
git clone <repository-url>
```bash
cd Expense-Tracker-main
```
Backend setup:
```bash
cd backend
npm install
npm start
```
Frontend setup:
```bash
cd ../frontend
npm install
npm start
```
# Running the App
Once both the frontend and backend servers are running, access the app at:
http://localhost:3000
