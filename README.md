# pickMart

## 1. Description

pickMart is a RESTful API for an E-Commerce platform that provides essential functionalities such as user authentication, product management, cart management, order processing, and payment integration. It follows a modular design and uses JWT for secure user authentication and role-based access control. The API allows customers to manage their carts and place orders, while administrators can manage products and view all orders.

## 2. Features

- **User Authentication & Authorization**: Secure user registration, login, and JWT-based authentication.
- **Role-Based Access Control**: Differentiates between admin and customer roles, providing appropriate permissions.
- **Product Management**: Admins can create, update, and delete products. Customers can view products.
- **Cart Management**: Customers can add, update, and remove products from their cart.
- **Order Management**: Customers can place orders and view their order history. Admins can view all orders.
- **Payment Integration**: Integrates with Paystack or Stripe for handling payments.
- **Security**: Implements security best practices like rate limiting, helmet for HTTP headers, and data sanitization.

## 3. Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose for schema modeling)
- **Authentication**: JWT (JSON Web Token) for token-based authentication
- **Testing**: Postman for API testing
- **Version Control**: Git, GitHub for version control
- **Deployment**: Heroku, Railway, or Render for deployment; MongoDB Atlas for the cloud database

## 4. Getting Started

### 4.1 Prerequisites

- [Node.js](https://nodejs.org/) - Ensure you have Node.js installed on your system.
- [MongoDB](https://www.mongodb.com/) - You need a MongoDB instance for your database.

### 4.2 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arnite/pickMart.git
   cd pickMart
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file in the root directory and add the following environment variables:

   ```env
   PORT= 3000
   DATABASE= mongodb://localhost:27017/yourdbname
   NODE_ENV= your environment (production / development)
   JWT_SECRET= your jwt secret
   JWT_EXPIRES_IN= your expiry day
   EMAIL_USERNAME= mailtrap username
   EMAIL_PASSWORD= mailtrap password
   EMAIL_HOST= mailtrap host
   EMAIL_PORT= mailtrap port
   SAname= superAdmin name
   SAemail= superAdmin email
   SApassword= superAdmin password
   SApasswordConfirm= superAdmin passwordConfirm
   SArole= superAdmin
   stripeApiKEY= your stripe ApiKey
   STRIPE_WEBHOOK_SECRET= your stripe webhook secret
   ```

4. Run the server:

   ```bash
   npm start
   ```

The server should now be running on `http://localhost:3000`

## 5. API Endpoints

- **POST /api/v1/users/signUp**: Register a new user.
- **POST /api/v1/users/createAdmin**: Create an admin (only accessible by superAdmin.)
- **POST /api/v1/users/login**: Log in a user and return a JWT token.
- **POST /api/v1/users/forgotPassword**: Request password reset.
- **POST /api/v1/users/resetPassword/**:token: Reset the user's password using a reset token.
- **POST /api/v1/users/updateMyPassword**: Update the user's password.
- **POST /api/v1/users/updateMe**: Update the user's profile.
- **GET /api/v1/users/me**: Get details of the currently authenticated user.
- **DELETE /api/v1/users/deleteMe**: Delete the currently authenticated user.
- **GET /api/v1/users**: Get a list of all users (only accessible by admin and superadmin).
- **GET /api/v1/users/:id**: Get details of a specific user by ID.
- **PATCH /api/v1/users/:id**: Update details of a specific user by ID.
- **DELETE /api/v1/users/:id**: Delete a user by ID.
- **GET /api/v1/products**: Get the list of all products
- **POST /api/v1/products**: Create a product (only accessible to admin)
- **GET /api/v1/products/:id**: Get the list of a specific product
- **PATCH /api/v1/products/:id**: Update a specific product
- **Delete /api/v1/products/:id**: Delete a specific product
- **GET /api/v1/orders/getMyOrders**: Retrieve order for logged in user
- **POST /api/v1/orders**: Create an order (only accessible to user)
- **GET /api/v1/orders**: Retrieve all orders (only accessible to admin)
- **GET /api/v1/orders/:userId**: Retrieve order for a specific user (only accessible to admin)
- **GET /api/v1/cart/getMyCart**: Retrieve the cart of logged in user (only accessible to user)
- **POST /api/v1/cart**: Create a cart and adds a product (only accessible to user)
- **PATCH /api/v1/cart/:id**: Updates a product in the cart (only accessible to user)
- **DELETE /api/v1/cart/:id**: Delete a product from the cart ( only accessible to user)

## 6. API Documentation

You can find the Postman collection for this API [here](https://documenter.getpostman.com/view/37611500/2sAYX2MjEo).

### How to Use the Postman Collection:

1. Click on the link to open the Postman collection.
2. Import the collection into your Postman app.
3. Set up any required environment variables or authentication tokens.
4. Run the requests to interact with the API.

This collection includes all the available endpoints for the API and their respective methods, parameters, and expected responses.

## 7. Contributing

- **Fork the repository.**
- **Create a new branch (git checkout -b feature-name).**
- **Make changes and commit (git commit -am 'Brief description of your changes').**
- **Push to the branch (git push origin feature-name).**
- **Create a new Pull Request.**

## 8. License

- **This project is licensed under the MIT License - see the LICENSE file for details.**
