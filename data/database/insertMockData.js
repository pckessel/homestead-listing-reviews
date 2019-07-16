const pg = require("./dbConnect.js");
const path = require('path');

const reviewsCSVPath = path.join(
  path.normalize(path.join(__dirname, "..")),
  "mockData/reviewsData.csv"
);

const usersCSVPath = path.join(
  path.normalize(path.join(__dirname, "..")),
  "mockData/usersData.csv"
);

const insertReviewsDataString = `COPY new_reviews(userid,listingid,date,reviewtext,accuracyrating,communicationrating,cleanlinessrating,locationrating,check_in_rating,valuerating)
FROM '${reviewsCSVPath}' DELIMITER ',' CSV;`;

const insertUserDataString = `COPY new_users(username,userimage)
FROM '${usersCSVPath}' DELIMITER ',' CSV;`;

pg.query(insertReviewsDataString)
  .then(res => console.log("Successfully inserted reviews data to new_reviews Table", res))
  .catch(err => console.log("Error with inserting reviews data to new_reviews Table", err));

pg.query(insertUserDataString)
  .then(res =>
    console.log("Successfully inserted users data to new_users Table", res)
  )
  .catch(err =>
    console.log("Error with inserting users data to new_users Table", err)
  );