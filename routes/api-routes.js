var db = require('../models');
// var bodyParser = require('body-parser');

module.exports = (app) => {

    //grabs all the data
    app.get('/api/data', (req, res) => {
        var Data = {};
        var promises = [
            db.Buildings.findAll({}),
            db.Zones.findAll({}),
            db.Utilities.findAll({})
        ];
        Promise.all(promises).then((dbData) => {
            Data.Buildings = dbData[0];
            Data.Zones = dbData[1];
            Data.Utilities = dbData[2]
            res.json(Data);
        }).catch((reason) => res.send(reason));



        //     db.Utilities.findAll({}).then((dbData) => {
        //         Data.Utilities = dbData
        //     })
        //     db.Zones.findAll({}).then((dbData) => {
        //         Data.Zones = dbData
        //     });
        //     db.Buildings.findAll({}).then((dbData) => {
        //         Data.Buildings = dbData 
        //    });
    });

    //creates one object that posts all the data to /api/data page
    app.post('/api/data', (req, res) => {
        var Data = {};
        // var promises = [
            db.Buildings.create({
                building_name: req.body.buildingName,
            }).then(building =>{
                Data.building = building;
                db.Zones.create({
                    plant_zones: req.body.plant_zones,
                    building_id: building.id
                }).then(zone => {
                    Data.zone = zone;
                    db.Utilities.create({
                        zone_id: zone.id,
                        // utility1
                        utility1name: 'Electricity',
                        capacity1: req.body.utility1capacity,
                        used1: req.body.utility1load,
                        percent_utilizations1: '0',
                        // utility 2
                        utility2name: 'Water',
                        capacity2: req.body.utility2capacity,
                        used2: req.body.utility2load,
                        percent_utilizations2: '0',
                        // utility 3
                        utility3name: 'HVAC',
                        capacity3: req.body.utility3capacity,
                        used3: req.body.utility3load,
                        percent_utilizations3: '0',
                        // utility 4
                        utility4name: 'Steam',
                        capacity4: req.body.utility4capacity,
                        used4: req.body.utility4load,
                        percent_utilizations4: '0',
                       
                    }).then(utilities => {
                        Data.utilities = utilities;
                        res.json(Data);
                    });
                });
            });
            
            
        // ];
        // Promise.all(promises).then((dbData) => {
        //     Data.Buildings = dbData[0];
        //     Data.Zones = dbData[1];
        //     Data.Utilities = dbData[2]
        //     
        // }).catch((reason) => res.send(reason)); 
    });
}