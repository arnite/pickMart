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
   NODE_ENV=development (local) or production (deployment).
   DATABASE=your_default_database_url
   PORT=3000
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=your_expiry_time
   JWT_COOKIE_EXPIRES_IN=your_expiry_time
   EMAIL_USERNAME=mailtrap_username
   EMAIL_PASSWORD=mailtrap_password
   EMAIL_HOST=mailtrap_host
   EMAIL_PORT=mailtrap_port
   SUPER_ADMIN_NAME=super_admin_name
   SUPER_ADMIN_EMAIL=super_admin_email
   SUPER_ADMIN_PASSWORD=super_admin_password
   STRIPE_API_KEY=your_stripe_api_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

4. Run the server:

   ```bash
   npm start
   ```

The server will run on the following URL depending on the environment:

- **Local (development)**: `http://localhost:3000`
- **Production (live server)**: The server URL will be defined based on your environment configuration.

## 5. API Endpoints

### **User Authentication & Management**

- **POST `/api/v1/users/signUp`**  
  _Register a new user._

- **POST `/api/v1/users/createAdmin`**  
  _Create an admin (only accessible by superAdmin)._

- **POST `/api/v1/users/login`**  
  _Log in a user and return a JWT token._

- **POST `/api/v1/users/forgotPassword`**  
  _Request a password reset by providing an email._

- **POST `/api/v1/users/resetPassword/:token`**  
  _Reset the user's password using a reset token sent to their email._

- **POST `/api/v1/users/updateMyPassword`**  
  _Logged-in users can update their passwords._

- **PATCH `/api/v1/users/updateMe`**  
  _Update the logged-in user's profile information (name, email, etc.)._

- **GET `/api/v1/users/me`**  
  _Retrieve details of the currently authenticated user._

- **DELETE `/api/v1/users/deleteMe`**  
  _Delete the currently authenticated user's account._

- **GET `/api/v1/users`**  
  _Get a list of all registered users (only accessible by admin or superAdmin)._

- **GET `/api/v1/users/:id`**  
  _Get details of a specific user by their ID._

- **PATCH `/api/v1/users/:id`**  
  _Update user details by ID (only accessible by admin)._

- **DELETE `/api/v1/users/:id`**  
  _Delete a specific user by ID (only accessible by admin)._

---

### **Product Management**

- **GET `/api/v1/products`**  
  _Retrieve a list of all available products._

- **POST `/api/v1/products`**  
  _Create a new product (only accessible to admin)._

- **GET `/api/v1/products/:id`**  
  _Retrieve details of a specific product by its ID._

- **PATCH `/api/v1/products/:id`**  
  _Update the details of a specific product (only accessible to admin)._

- **DELETE `/api/v1/products/:id`**  
  _Remove a specific product from the database (only accessible to admin)._

---

### **Cart Management**

- **GET `/api/v1/cart/getMyCart`**  
  _Retrieve the current cart items of the logged-in user._

- **POST `/api/v1/cart`**  
  _Add a product to the cart (only accessible to users)._

- **PATCH `/api/v1/cart/:id`**  
  _Update the quantity of a product in the cart (only accessible to users)._

- **DELETE `/api/v1/cart/:id`**  
  _Remove a specific product from the cart (only accessible to users)._

---

### **Order Management**

- **GET `/api/v1/orders/getMyOrders`**  
  _Retrieve all past orders of the logged-in user._

- **POST `/api/v1/orders`**  
  _Create a new order from the items in the cart (only accessible to users)._

- **GET `/api/v1/orders`**  
  _Retrieve all orders in the system (only accessible to admin)._

- **GET `/api/v1/orders/:userId`**  
  _Retrieve the orders of a specific user (only accessible to admin)._

---

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

## 8. You can view the live version of the app here:

[pickMart - Live API](https://pickmart-k8na.onrender.com)

## 9. License

- **This project is licensed under the MIT License - see the LICENSE file for details.**
