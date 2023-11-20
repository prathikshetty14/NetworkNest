# NetworkNest - Heliverse

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## About the Project

BusyBuy is an E-Commerce web application that allows users to browse available users, add or remove them from their selections, and complete building their team. It provides a seamless experience for users for building teams of their desire.

## Features

1. User Registration: New users can create an account to access the platform.
2. User Authentication: Existing users can log in to their accounts securely.
3. User Catalog: Users can view a list of available users.
4. Search: Users can search for by name.
5. Selected List: Users can add, remove, and manage selected users.
6. Final Team: Users can view their teams entire details.
7. Product Filtering: Users can filter the user list by domain, gender and availability.
8. Error Handling: The application provides informative error messages.
9. User Feedback: Toast messages for async actions and error conditions.

## Tech Stack

- Node.js: Backend framework for deploying user list.
- MongoDB: Database provided for the backend project.
- React: Front-end framework for building the user interface.
- Firebase: Backend as a Service (BaaS) for user authentication and database.
- react-router-dom: For client-side routing within the application.
- react-toastify: For displaying toast messages.
- CSS: Styling the application.
- Additional libraries for specific features as mentioned in the project requirements.

## Getting Started

To get started with BusyBuy, you can follow these instructions:

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system.
- Cloud MongoDB Account: You'll need a MongoDB account.
- Firebase Account: You'll need a Firebase account and a Firestore database set up.

## Installation Backend

1. Clone the repository to your local machine:
   ```
   git clone [https://github.com/prathikshetty14/NetworkNest]
   ```
   
2. Navigate to the project directory:
   ```
   cd backend
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Set up .env:
- Create a MongoDB project and MongoDB database.
- Configure the Cloud MongoDB in the project and paste the URL in the .env file.
  
5. Start the development server:
   ```
   npm start
   ```

## Installation Frontend

1. Clone the repository to your local machine:
   ```
   git clone [https://github.com/prathikshetty14/NetworkNest]
   ```
   
2. Navigate to the project directory:
   ```
   cd frontend
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Set up Firebase:
- Create a Firebase project and Firestore database.
- Configure Firebase in the project and replace the Firebase configuration in your code.
  
5. Start the development server:
   ```
   npm start
   ```

## Usage Backend

Here are the requests you can run in Postman to perform CRUD operations on your user data:
- Create a new user (POST request):
   ```
   http://localhost:3000/api/v1/users
   ```
- Retrieve all users with pagination (GET request):
   ```
   http://localhost:3000/api/v1/users](http://localhost:3000/api/v1/users
   ```
  You can add query parameters like ?page=1&limit=10 to specify the page and limit for pagination.
   ```
   http://localhost:3000/api/v1/users?page=1&limit=10
   ```  
- Retrieve a specific user by ID (GET request):
   ```
   http://localhost:3000/api/v1/users/:id
   ```
- Update an existing user by ID (PUT request):
   ```
   http://localhost:3000/api/v1/users/:id
   ```
- Delete a user by ID (DELETE request):
   ```
   http://localhost:3000/api/v1/users/:id
   ```


## Usage Frontend

- Register a new user or log in with an existing account.
- Explore the user catalog and search for the ideal user.
- Select the desired user to your list and proceed to finalise your team.
- View your final team and also the their in-depth details.

## Author

*Prathik Shetty* - **Full Stack Developer**

