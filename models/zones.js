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

  // associates buildings to zones
  // Zones.belongsTo(buildingsModel);

  Zones.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Zones.belongsTo(models.Buildings, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Zones;
};