'use strict';

var books = [
  { name: 'Pai rico, pai pobre', genre: 'Finanças', id: '1', author_id: '1' },
  { name: 'Sapiens', genre: 'História', id: '2', author_id: '2' },
  { name: 'O Hobbit', genre: 'Fantasia', id: '3', author_id: '3' },
  { name: 'O Senhor dos Anéis', genre: 'Fantasia', id: '4', author_id: '3' },
  { name: '21 lições para o século 21', genre: 'História', id: '5', author_id: '2' },
  { name: 'Cashflow Quadrant', genre: 'Finanças', id: '6', author_id: '1' },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', books.map(book => ({ ...book, createdAt: new Date(), updatedAt: new Date() })));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
