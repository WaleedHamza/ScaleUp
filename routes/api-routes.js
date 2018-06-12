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
                    BuildingId: building.id,
                }).then(zone => {
                    Data.zone = zone;
                    db.Utilities.create({
                        ZoneId: zone.id,
                        // utility1
                        utility1name: req.body.utility1name,
                        capacity1: req.body.utility1capacity,
                        load1: req.body.utility1load,
                        percent_utilization1: req.body.utility1percentutilization,
                        // utility 2
                        utility2name: req.body.utility2name,
                        capacity2: req.body.utility2capacity,
                        load2: req.body.utility2load,
                        percent_utilization2: req.body.utility2percentutilization,
                        // utility 3
                        utility3name: req.body.utility3name,
                        capacity3: req.body.utility3capacity,
                        load3: req.body.utility3load,
                        percent_utilization3: req.body.utility3percentutilization,
                        // utility 4
                        utility4name: req.body.utility4name,
                        capacity4: req.body.utility4capacity,
                        load4: req.body.utility4load,
                        percent_utilization4: req.body.utility4percentutilization,
                        // utility 5
                        utility5name: req.body.utility5name,
                        capacity5: req.body.utility5capacity,
                        load5: req.body.utility5load,
                        percent_utilization5: req.body.utility5percentutilization,
                        // utility 6
                        utility6name: req.body.utility6name,
                        capacity6: req.body.utility6capacity,
                        load6: req.body.utility6load,
                        percent_utilization6: req.body.utility6percentutilization,
                        // utility 7
                        utility7name: req.body.utility7name,
                        capacity7: req.body.utility7capacity,
                        load7: req.body.utility7load,
                        percent_utilization7: req.body.utility7percentutilization
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