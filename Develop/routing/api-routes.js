// const db = require('/../db/db.json');
const path = require('path');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

const id = generateUniqueId({
    length: 10,
    useLetters: true,
    useNumbers: true
});

module.exports = function (app) {
    fs.readFile(__dirname + '/../db/db.json', 'utf8', function (err, data) {
        if (err) throw err;
        let notes = JSON.parse(data);

        function updateNotes() {
            fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(notes), function(error) {
                if (err) throw err;
                return true;
            })
        }
        
        app.get('/api/notes', function(req, res) {
            res.json(notes);
        })

        app.post('/api/notes', function(req, res) {
            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: id
            };
            notes.push(newNote);
            updateNotes();
        })

        app.get('/api/notes/:id', function(req, res) {
            res.json(notes[req.params.id]);
        })

        app.delete('/api/notes/:id', function(req, res) {
            notes.splice(req.params.id, 1);
            updateNotes();
        })
    })
};