`use strict`;

let url = function(sequelize,DataTypes){
  let url = sequelize.define('Url',{
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  url: {
      type: DataTypes.STRING,
      allowNull:false
  },
  hash: {
      type: DataTypes.STRING,
      allowNull:false
  }
  })
  return url;
};

module.exports = url;