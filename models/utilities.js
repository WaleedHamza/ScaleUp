module.exports = function(sequelize, DataTypes) {
  
  //requires zones sequelize info
  var zoneModels = require("./zones.js")(sequelize,DataTypes);


  var Utilities = sequelize.define("Utilities", {
    // zone_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'zones',
    //     key: 'id',
    //   }
    // }
    // ,
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
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    },
    used1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    }
    ,
    percent_utilizations1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
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
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    },
    used2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilizations2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
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
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    },
    used3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    },
    percent_utilizations3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
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
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    },
    used4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    }
    ,
    percent_utilizations4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,1000],
        isInt: true,
        notEmpty: true,
      }
    }


  }, {
      timestamps: false
  });



  Utilities.associate = function(models) {
    // We're saying that a Utility should belong to a Zone
    // A Utility can't be created without a Zone due to the foreign key constraint
    Utilities.belongsTo(models.Zones, {
      foreignKey: {
        allowNull: false
      }
    });
    
  };

  

  // // associates zones to utilities
  // Utilities.belongsTo(zoneModels);


  return Utilities;
};




