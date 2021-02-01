// include midleware to parse json
// html routes (routes that will serve websites)
//define landing page route 
  // use index.html inside public folder
// note page route 
  // use notes.html inside public folder
//API routes 
// post route to save a note 
  // ADD the new note to the db.json
// get route to get all notes
// put route to update a note (app.put())
// delete route to delete a note
// invoke listen function on express app

// Add express server and other dependencies
const express = require('express');
const path = require('path');
const generateUniqueId = require('generate-unique-id');

// Create express app
const app = express();
const PORT = 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());