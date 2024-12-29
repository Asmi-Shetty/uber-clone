# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It accepts user details such as first name, last name, email, and password, validates the input, hashes the password, and creates a new user in the database.

### Request Body:
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

 
#### Success (201):
- **Description**: User successfully registered.
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Client Error (400):
- **Description**: Invalid request data.
- **Body**:
  ```json
  {
    "message": "Invalid request",
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

#### Server Error (500):
- **Description**: Internal server error.
- **Body**:
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Validation:
- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

### Notes:
- The password is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.