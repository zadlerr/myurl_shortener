'use strict';


const columnAndTypes = [{
  name: 'short_url',
  type: (Sequelize) => {
    return {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: false
    }
  }
}];

// Don't change it
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.addColumn( // adding to existing table
          'Urls',
          c.name,
          c.type(Sequelize)
        )
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.removeColumn( // removing to existing table
          'Url',
          c.name,
        )
      })
    )
  }
};