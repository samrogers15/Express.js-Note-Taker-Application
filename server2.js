const fs = require('fs');
const path = require('path');
const express = require('express');
const generateUniqueId = require('generate-unique-id');
const id = generateUniqueId({
    length: 10,
    useLetters: true,
    useNumbers: true
});

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html)'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/db/db.json'));
});

app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));
    let noteId = id;

    newNote.id = noteId;
    noteList.push(newNote);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

app.delete('/api/notes/:id', (req, res) => {
    let noteList = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));
    let noteId = (req.params.id).toString();

    noteList = noteList.filter(selected => {
        return selected.id != noteId;
    })

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

app.listen(PORT, function() {
    console.log(`App listening on Port: ${PORT}`);
});