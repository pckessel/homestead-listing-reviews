var faker = require('faker');

let createRecord = (knex, userId) => {
  return knex('users').insert({
    userId,
    userName: faker.name.findName(),
    userImage: faker.image.imageUrl()
  })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      let records = [];
      for (let i = 0; i < 100; i++ ) {
        records.push(createRecord(knex, i))
      }
      return Promise.all(records)
    });
};
