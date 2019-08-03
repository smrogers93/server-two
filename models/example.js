module.exports = function(sequelize, DataTypes) {
  var SharkAttacks = sequelize.define("SharkAttacks", {
    date: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
    year: {
      type: DataTypes.INTEGER,
      defaultValue: "N/A"
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity: {
      type: DataTypes.STRING,
      defaultValue: "No information"
    },
    species: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
    hasPDF: {
      type: DataTypes.BOOLEAN,
      defaultValue: "FALSE"
    },
    pdf: {
      type: DataTypes.STRING,
      defaultValue: "No PDF available."
    }
  });
  return SharkAttacks;
}