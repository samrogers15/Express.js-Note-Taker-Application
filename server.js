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
const fs = require('fs');

// Create express app
const app = express();
const PORT = 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('develop'));

// Define landing page route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './develop/public/index.html')));

// Define notes page route
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './develop/public/notes..html')));

// Define db.json path
const dbJson = path.join(__dirname, 'db.json');

// Displays all notes previously added to db.json
app.get('/api/notes', (req, res) => res.sendFile(dbJson));

// Create new notes - takes in JSON input
app.post('/api/notes', (req, res) => {
    const newNote = req.body;

    newNote.noteTitle = newNote.noteTitle.replace(/\s+/g, '').toLowerCase();
    console.log(newNote);

    dbJson.push(newNote);
    res.json(newNote);
});

// Displays a single note, or returns false
app.get('/api/notes/:title', (req, res) => {
    const chosen = req.params.noteTitle
    
    console.log(chosen);

    for (let i = 0; i < dbJson.length; i++) {
        if (chosen === dbJson[i].noteTitle) {
            return res.json(dbJson[i]);
        };
    };

    return res.json(false);
});

// Create put route to update a previous note
app.put('/api/notes/:title', (req, res) => {

});

// Create delete route to delete a specific note
app.delete('/api/notes/:title', (req, res) => {

});





// Adds a new note to the db.json file
// app.post('/api/notes', (req,res) => 
//     fs.readFile(path.join(__dirname, 'db.json'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Error inside the readFile code: ', err);
//     } else {
//         const noteRes = json.parse(res);
//         const noteReq = req.body;
//         const noteId = generateUniqueId();
//         const newNote = {
//             id = noteId,
//             title = noteReq.title,
//             text = noteReq.text
//         }
//         noteRes.push(newNote);
//         res.json(newNote);
//         fs.writeFile(path.join(__dirname, 'db.json'), 'utf-8', (err) => {
//             if (err) {
//                 console.log('Error inside the writeFile code: ', err);
//                 throw err;
//             }
//         })
//     }
    
//     });
// );