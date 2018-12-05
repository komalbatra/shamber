module.exports = function(sequelize, DataTypes) {
  var Shamber = sequelize.define("share_a_shame", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    shame: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Shamber;
};
