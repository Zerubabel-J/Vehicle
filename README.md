# Vehicle Management System

## Overview

This project is a simple web-based Vehicle Management System built with React and Material-UI. It allows users to manage vehicles by adding, updating, and deleting vehicles from a list. The application fetches and displays vehicle data from a backend API and updates the UI in real-time.

## Features

- **Add Vehicle**: Add a new vehicle with details such as name and status (Active/Inactive).
- **Update Vehicle**: Edit the details of an existing vehicle.
- **Delete Vehicle**: Remove a vehicle from the list.
- **Real-time Updates**: Vehicle list is automatically updated after adding, updating, or deleting a vehicle.
- **Snackbar Notifications**: Success notifications are shown when actions are completed successfully.

## Technologies Used

- **React**: Front-end framework for building the UI components.
- **Material-UI**: UI framework for styling and components such as buttons, forms, and modals.
- **Axios**: For making API requests to the backend server.
- **React Hooks**: Used for managing state and side-effects within components.
- **React Router**: For routing and navigation (if applicable).
- **Modal Dialog**: For editing vehicles.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Zerubabel-J/Vehicle.git

   ```

2. Navigate to the server directory and install dependencies:

   ```bash
   cd Vehicle/server
   npm install
   ```

3. Navigate to the client directory and install dependencies:

   ```bash
   cd Vehicle/client
   npm install
   ```

4. Start both the server and the client:
   ```bash
   npm run dev
   ```
