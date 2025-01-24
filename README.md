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
