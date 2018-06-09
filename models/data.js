module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define("Data", {
    plant_zones: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    load_data: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    percent_utilization: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // This is questionable for ignoring timestamps
    // timestamps: false
  });
  return Data;
};
