# RESTful API with Node.js, Express.js, and MongoDB or use Node.js framework (Nest.js)

This project is a RESTful API built using **Nest.js** and **Typescript**. It provides a backend service for a frontend application and includes several features such as user registration, login, CRUD operations, data search and filtering, pagination, sorting, authentication, and error handling.

## Features

1. **User Registration and Login**
   - Secure password storage and hashing.
   - User registration with validation checks.
   - User login with JWT token authentication.

2. **CRUD Operations**
   - Create, Read, Update, and Delete (CRUD) functionality for managing user data.

3. **Search and Filter**
   - Ability to search data by user-defined parameters such as username, email, or mobile number.
   - Filters for sorting data by creation date, modification date, and alphabetical order.

4. **Pagination and Sorting**
   - Pagination to handle large datasets and improve performance.
   - Sorting to display data in ascending or descending order.

5. **Authentication and Authorization**
   - Secure JWT token-based authentication.
   - Authorization of requests to protect sensitive endpoints.

6. **Error Handling and Logging**
   - Comprehensive error handling to ensure smooth API responses.
   - Logging of API requests and responses using `winston` or a similar library for monitoring and debugging.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or any other database, if desired)
- [Postman](https://www.postman.com/) or a similar API client for testing

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/gaurav-G-Bro/raftlabs-assessment.git
    cd raftlabs-assessment
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

    ```env
    PORT=3000

    MONGO_URI=mongodb://localhost:27017/your-database-name
                      or
    MONGO_URI=mongodb+srv://username:password@cluster0.ocxwbhi.mongodb.net/database_name?authSource=admin

    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application:**
    ```bash
    npm run start 
        or 
    npm run dev
    ```

### API Endpoints

| Method | Endpoint               | Description                                 |
|--------|------------------------|---------------------------------------------|
| POST   | `/users/register`      | Register a new user                         |
| POST   | `/users/login`         | Login and get a JWT token                   |
| PATCH  | `/users/update`        | Update user details                         |
| GET    | `/users/search`        | Search and filter users                     |
| DELETE | `/users/delete/:id`    | Delete a user by ID                         |

### Example Requests

#### 1. **Register a User**

- **Endpoint**: `POST /users/register`
- **Body**:
    ```json
    {
      "email": "test1@example.com",
      "firstName": "Test",
      "lastName": "1",
      "username": "test1",
      "password": "Password123",
      "mobileNumber": "1234567890",
      "age": 25
    }
    ```

#### 2. **Login a User**

- **Endpoint**: `POST /users/login`
- **Body**:
    ```json
    {
      "email": "test1@example.com",
      "password": "Password123"
    }
    ```

#### 3. **Update User Details**

- **Endpoint**: `PATCH /users/update`
- **Headers**: `Authorization: Bearer <JWT token>`
- **Body**:
    ```json
    {
      "email": "test1@example.com",
      "firstName": "Jane"
    }
    ```

#### 4. **Search Users**

- **Endpoint**: `GET /users/search?username=test1` Note: In search, you have to write full data of it.
- **Headers**: `Authorization: Bearer <JWT token>`

#### 5. **Delete a User**

- **Endpoint**: `DELETE /users/delete/:id`
- **Headers**: `Authorization: Bearer <JWT token>`

## Error Handling

The API uses comprehensive error handling to ensure that all errors are captured and meaningful messages are returned to the client. Common HTTP status codes used include:

- **400 Bad Request**: The request could not be understood or was missing required parameters.
- **401 Unauthorized**: Authentication failed or user does not have permissions for the requested operation.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.

## Logging

Logging is implemented using `winston` or a similar library to capture all API requests and responses, including errors, for monitoring and debugging purposes.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

This project is open to use for the Begineer to Intermediate level students, programmers or coders.

---

**Happy Coding!**
**Gaurav**
**LinkedIn: https://www.linkedin.com/in/gaurav-kumar-a945231b0/**
