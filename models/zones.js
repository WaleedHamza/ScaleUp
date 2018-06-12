module.exports = function(sequelize, DataTypes) {

  //requires buildings sequelize info
  var buildingsModel = require("./buildings.js")(sequelize, DataTypes);


  var Zones = sequelize.define("Zones", {
    plant_zones: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
  });

  // associates buildings to zones
  Zones.belongsTo(buildingsModel);

  return Zones;
};