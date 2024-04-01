# Registration Form Project
This repository contains a simple registration form project developed using HTML, CSS, Node.js, and MongoDB.
The project consists of the main registration form (index.html), a success page for successful registrations (signup_successful.html), the styling for the pages (style.css), and the server-side logic (index.js) to handle form submissions and store user information in MongoDB.

## Project Structure
- *index.html*: The main registration form that users fill out to sign up. It includes fields for Name, Age, Email, Phone Number, Gender, and Password.
- *signup_successful.html*: The success page displayed after a user successfully registers. It includes a message and a background image.
- *style.css*: Stylesheet for formatting and styling the HTML pages. It uses the 'Poppins' font and includes styles for the registration form and success page.
- *index.js*: Node.js script to handle server-side logic. It uses Express for handling HTTP requests, Body Parser for parsing request bodies, and Mongoose to interact with MongoDB. The script establishes a connection to the database and handles POST requests to the "/sign_up" endpoint, storing user information in the 'users' collection.

## Dependencies
- Express: npm install express
- Body Parser: npm install body-parser
- Mongoose: npm install mongoose

## Database Configuration
The project is configured to use MongoDB. Update the MongoDB connection string in the mongosse.connect method in index.js with your own MongoDB connection string.

javascript
mongosse.connect('your-mongodb-connection-string')


## Usage
1. Fill out the registration form at [http://localhost:3000](http://localhost:3000).
2. Upon successful registration, you will be redirected to the success page.

3. # Project Screenshots
1. Image1
![Manmohan Singh _ Login   Registration ](https://github.com/MANMOHAN14/Registration-Form/assets/106026981/afd4e102-8fd7-43ad-8634-1af3a13df7df)
2. Image2
![Manmohan Singh _ Login   Registration Success](https://github.com/MANMOHAN14/Registration-Form/assets/106026981/b02bde12-6bcd-4c17-b243-310622ee9ed0)


Feel free to fork, modify, and use the code for your own projects! If you encounter any issues or have suggestions for improvements, please create an issue or pull request.
