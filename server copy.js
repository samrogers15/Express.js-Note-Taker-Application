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

// Create express app and global variables
const app = express();
const PORT = 3000;
const mainDirectory = path.join(__dirname, '/develop/public');

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('/develop/public'));

// Define notes page route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(mainDirectory, 'notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/develop/db/db.json'));
});

app.get('/api/notes/:id', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('./develop/db/db.json', 'utf8'));
    res.json(savedNotes[Number(req.params.id)]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(mainDirectory, 'index.html'));
});

//
app.listen(PORT, () => console.log(`App listening on Port: ${PORT}`));

// // Displays a single note, or returns false
// app.get('/api/notes/:title', (req, res) => {
//     const chosen = req.params.noteTitle
    
//     console.log(chosen);

//     for (let i = 0; i < dbJson.length; i++) {
//         if (chosen === dbJson[i].noteTitle) {
//             return res.json(dbJson[i]);
//         };
//     };

//     return res.json(false);
// });





// Define notes variable
// fs.readFile('./develop/db/db.json', 'utf-8', (err, data) => {
//     if (err) throw err;

//     const notes = JSON.parse(data);

//     // Set up 'get route' for /api/notes
//     app.get('/api/notes', (req, res) =>
//     // return any previously saved notes in file
//     res.json(notes));

//     // Set up 'post route' for /api/notes
//     app.post('/api/notes', (req, res) => {
//         const newNote = req.body;
//         notes.push(newNote);
//         console.log('Added in new note: ', newNote.title);
//         // Add in function to update db.json file
//     });

//     // Set up 'get route' 


// });

// // Writes file to db.json whenever a note is added or deleted
// updateDB = () => {
//     fs.writeFile('./develop/db/db.json', )
// };


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