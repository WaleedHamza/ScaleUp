var db = require('../models');
// var bodyParser = require('body-parser');

module.exports = (app) => {

    app.get('/api/data', (req, res) => {
        db.Data.findAll({}).then((dbData) => {
            res.json(dbData)
        })
    });

    app.post('/api/data', (req, res) => {
        console.log(req.body)
        db.Data.create({
          //database code here
          plant_zones: req.body.plant_zones,
          // not sure below is the proper syntax, text above works because
          // it's the only field with type=text
          capacity: req.body.capacity,
          load_data: req.body.load_data,
          percent_utilization: req.body.percent_utilization
        }).then((dbData) => {
            res.json(dbData);
        })
    })
}