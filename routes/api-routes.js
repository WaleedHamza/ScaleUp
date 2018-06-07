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
            /////database code here
        }).then((dbData) => {
            res.json(dbData);
        })
    })


}