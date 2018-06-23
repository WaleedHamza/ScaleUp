module.exports = function(sequelize, DataTypes) {
  var Buildings = sequelize.define("Buildings", {
      building_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        // notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
        
      }
    }
  }, {
    timestamps: false
});
  return Buildings;
};