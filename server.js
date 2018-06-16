var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();

//added to definen db
var db = require("./models/index.js");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var router = require("./controller/dataController.js");

app.use(router);

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log('Server is listening on : http://localhost:' + PORT);
    });
});