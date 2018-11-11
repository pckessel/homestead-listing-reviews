var faker = require('faker');

var images = [
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/aleksandar-popovski-110004-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/alex-blajan-223771-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/averie-woodard-111823-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/ayo-ogunseinde-93181-unsplash.jpg','https://s3-us-west-1.amazonaws.com/hslistingreviews/images/brooke-cagle-224814-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/brooke-cagle-241286-unsplash.jpg', 'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/brooke-cagle-274465-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/brooke-cagle-274634-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/erik-lucatero-310633-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/florian-perennes-594195-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/harps-joseph-719667-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/ihor-saveliev-507311-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/james-gillespie-714755-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/jared-sluyter-260692-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/jay-lee-671279-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/joelvalve-560893-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/nik-macmillan-284747-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/rowan-chestnut-175871-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/sonnie-hiles-674739-unsplash.jpg',
'https://s3-us-west-1.amazonaws.com/hslistingreviews/images/thomas-young-664940-unsplash.jpg'
];

let createRecord = (knex, userId, userImage) => {
  return knex("users").insert({
    userId,
    userName: faker.name.findName(),
    userImage: userImage
  })
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      let records = [];
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

      for (let i = 0; i < 100; i++ ) {
        records.push(createRecord( knex, i, `https://s3-us-west-1.amazonaws.com/hslistingreviews/images/user${getRandomInt(10, 47)}.jpg` ))
      }
      return Promise.all(records)
    });
};
