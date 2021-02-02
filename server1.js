// const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
// const htmlRoutes = require('./Develop/routing/html-routes');
// const apiRoutes = require('./Develop/routing/api-routes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
// app.use(bodyParser.json())

require('./Develop/routing/api-routes')(app);
require('./Develop/routing/html-routes')(app);


app.listen(PORT, function() {
    console.log(`App listening on Port: ${PORT}`);
});