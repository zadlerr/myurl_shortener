`use strict`;

let migration = {
  up: function(queryInterface,Sequelize){
    return queryInterface.createTable('Url',{
      id : {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      createdAt:{
          allowNull: false,
          type:Sequelize.DATE
      },
      updatedAt:{
          allowNull: false,
          type:Sequelize.DATE
      },
      url:{
          allowNull: false,
          type:Sequelize.STRING
      },
      hash:{
        allowNull: false,
        type:Sequelize.STRING
      }     
    })
  }
};


module.exports = migration;