# Express.js Note Taker Application
> TBD.
 
## Table of contents
* [User story](#user-story)
* [General info](#general-info)
* [Screenshots](#Screenshots)
* [Technologies](#technologies)
* [Live Link](#example-html)
* [Code Snippet](#code-snippet)
* [Sources](#sources)
* [Contact](#contact)

## User story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## General info
TBD.

## Screenshots
![Homepage]()
![Notes]()

## Technologies
* HTML
* CSS
* JavaScript
* Node
* NPM Express

## Live link
[Express.js Note Taker Application]()

## Code snippets

The below example code shows the setup and initialization for the Express server:
```js
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
```


The below example code shows the routing setup for the HTML routes: 


The below example code shows the routing setup for the API routes:



## Sources
Application enabled using the following sources:

* [NPM Express](https://expressjs.com/)
* [NPM Generate Unique ID](https://www.npmjs.com/package/generate-unique-id)

## Contact
Created by Sam Rogers - feel free to contact me to collaborate on this project or any other project!

[LinkedIn](https://www.linkedin.com/in/samuelerogers/)

[Portfolio](https://samrogers15.github.io/Current_Portfolio/index.html)