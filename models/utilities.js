module.exports = function(sequelize, DataTypes) {
  
  //requires zones sequelize info
  var zoneModels = require("./zones.js")(sequelize,DataTypes);


  var Utilities = sequelize.define("Utilities", {
    // utility 1
    utility1name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
    capacity1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    load1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilization1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,3],
        isInt: true,
        notEmpty: true,
      }
    },




    utility2name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
    capacity2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    load2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilization2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,3],
        isInt: true,
        notEmpty: true,
      }
    },





    utility3name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
    capacity3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    load3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilization3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,3],
        isInt: true,
        notEmpty: true,
      }
    },





    utility4name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
    capacity4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    load4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilization4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,3],
        isInt: true,
        notEmpty: true,
      }
    },




    utility5name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
    capacity5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    load5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilization5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,3],
        isInt: true,
        notEmpty: true,
      }
    },





    utility6name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
    capacity6: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    load6: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilization6: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,3],
        isInt: true,
        notEmpty: true,
      }
    },



    utility7name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
        notEmpty: true,
        is: ["[A-Za-z0-9\s_]+"],
      }
    },
    capacity7: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    load7: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,8],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilization7: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,3],
        isInt: true,
        notEmpty: true,
      }
    },












  });

  // associates zones to utilities
  Utilities.belongsTo(zoneModels);

  return Utilities;
};




