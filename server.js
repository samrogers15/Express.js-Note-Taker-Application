// Add required dependencies
const express = require('express');
const path = require('path');

// Create express app
const app = express();
const PORT = process.env.PORT || 8080;

// Set up middleware to parse json file
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// Require routes files for both API routes and HTML routes
require('./routing/api-routes')(app);
require('./routing/html-routes')(app);

// Invoke listen function on Express app
app.listen(PORT, function() {
    console.log(`App listening on Port: ${PORT}`);
});