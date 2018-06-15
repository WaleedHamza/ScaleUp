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
    }
    // ,
    // building_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'buildings',
    //     key: 'id',
    //   }
    // }
  }, {
    timestamps: false
});


Zones.associate = function(models) {
  // We're saying that a Building should belong to a Zone
  Zones.belongsTo(models.Buildings, {
    foreignKey: {
      allowNull: false
    }
  });
};

  // // associates buildings to zones
  // Zones.belongsTo(buildingsModel);


  return Zones;
};