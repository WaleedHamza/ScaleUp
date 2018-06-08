var db = require('../models');

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
          plant_zones: req.body.plantZone.text,
          // not sure below is the proper syntax, text above works because
          // it's the only field with type=text
          capacity: req.body.capacity.text,
          load_data: req.body.load.text,
          percent_utilization: req.body.percent.text
        }).then((dbData) => {
            res.json(dbData);
        })
    })
}