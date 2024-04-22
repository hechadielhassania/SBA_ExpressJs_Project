# Express.js Blog Application

This is a simple blog application built with Node.js and Express.js. The application allows users to create, read, update, and delete posts, comments, and users. It uses JSON files to store data for posts, comments, and users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- CRUD operations for posts: Create, Read, Update, Delete
- CRUD operations for comments: Create, Read, Update, Delete
- CRUD operations for users: Create, Read, Update, Delete
- User authentication and authorization
- JSON file storage for data persistence

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hechadielhassania/SBA_ExpressJs_Project.git

2. Navigate to the project directory:

   ```bash
    cd SBA_ExpressJs_Project

4. Install dependencies:
5. 
   npm install

6. Start the server:

   npm start

## Usage
Visit http://localhost:3000 in your web browser to access the application.
Use the application to create, read, update, and delete posts, comments, and users.

## Routes

Posts Routes:
GET /api/posts: Get all posts
GET /api/posts/:id: Get a single post by ID
POST /api/posts: Create a new post
PUT /api/posts/:id: Update a post by ID
DELETE /api/posts/:id: Delete a post by ID

Comments Routes:
GET /api/comments: Get all comments
GET /api/comments/:id: Get a single comment by ID
POST /api/comments: Create a new comment
PUT /api/comments/:id: Update a comment by ID
DELETE /api/comments/:id: Delete a comment by ID

Users Routes:
GET /api/users: Get all users
GET /api/users/:id: Get a single user by ID
POST /api/users: Create a new user
PUT /api/users/:id: Update a user by ID
DELETE /api/users/:id: Delete a user by ID


## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.
