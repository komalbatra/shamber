module.exports = function(sequelize, DataTypes) {
  var Shamber = sequelize.define("Shamber", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [25]
      }
    },
    shame: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Shamber;
};
