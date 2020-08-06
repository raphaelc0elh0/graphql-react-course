'use strict';

var authors = [
  { name: 'Robert Kiyosaki', age: 73, id: '1' },
  { name: 'Yuval Noah Harari', age: 44, id: '2' },
  { name: 'J. R. R. Tolkien', age: 128, id: '3' }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', authors.map(author => ({ ...author, createdAt: new Date(), updatedAt: new Date() })));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
