const faker = require("faker");

let createReview = (knex, userId) => {
  return knex("reviews").insert({
    listingId: faker.random.number(50),
    date: faker.date.between('2016-01-01', '2018-12-31'),
    reviewText: faker.lorem.paragraph(),
    accuracyRating: faker.random.number(5),
    communicationRating: faker.random.number(5),
    cleanlinessRating: faker.random.number(5),
    locationRating: faker.random.number(5),
    check_In_Rating: faker.random.number(5),
    valueRating: faker.random.number(5)
  });
};

exports.seed = function(knex, Promise) {
  return knex("reviews").del()
    .then(function() {
      let reviews = [];

      for (let i = 1; i <= 1000; i++) {
        reviews.push(createReview(knex, i));
      }
      return Promise.all(reviews);
    });
}
