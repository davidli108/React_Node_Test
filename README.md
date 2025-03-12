# React & Node.js Skill Test

This project is a full-stack application built with **React** for the frontend and **Node.js** with **Express** for the backend. It uses **MongoDB** as the database and demonstrates basic CRUD operations for managing meetings.

---

## Loom Video
Watch the demo video to see the application in action:  
[Loom Video](https://www.loom.com/share/9dbbb53ecd64459a8d28bda7d9d3ff57)

---

## Main Features

### Frontend Implementation
- **Meeting Page**: Displays all meetings in a table.
- **Add New Meeting**: Allows users to add a new meeting.
- **Delete One/Many Meetings**: Supports deleting a single meeting or multiple meetings at once.
- **View Meeting Details**: Users can view detailed information about a specific meeting.

### Backend API Endpoints
The backend provides the following RESTful API endpoints:

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| POST   | `/add`                 | Add a new meeting.                   |
| GET    | `/`                    | Get all meetings.                    |
| GET    | `/view/:id`            | Get a single meeting by ID.          |
| DELETE | `/delete/:id`          | Soft delete a meeting by ID.         |
| POST   | `/deleteMany`          | Soft delete multiple meetings by IDs.|

---

## Environment
This project uses the following technologies:

- **Frontend**: React, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed or a MongoDB Atlas connection string.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/davidli108/React_Node_Test.git
   cd REACT_NODE_TEST
2. **Frontend**:
   ```bash
   cd client
   npm install
   npm start
3. **Backend**:
   ```bash
   cd server
   npm install
   npm start

### Author
  - Name: David Li
  - Contact: davidjli.dev@gmail.com