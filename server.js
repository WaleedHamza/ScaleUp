var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();

//added to definen db
var db = require("./models/index.js");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// The use of handle bars is up for discussion with the team//
// var exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');


var router = require("./controller/dataController.js");

app.use(router);

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

db.sequelize.sync({force:true}).then(function () {
    app.listen(PORT, function () {
        console.log('Server is listening on : http://localhost:' + PORT);
    });
});