// Add required dependencies
const path = require('path');
const fs = require('fs');

// Set up HTML routes export for server.js page
module.exports = function (app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/notes.html'));
    });

};