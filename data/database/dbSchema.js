const pg = require("./dbConnect.js");

const createUserTableText = `CREATE TABLE IF NOT EXISTS new_users (
        userId SERIAL PRIMARY KEY,
        userName text,
        userImage integer
        )`;

const createRecordsTableText = `CREATE TABLE IF NOT EXISTS new_reviews (
        reviewId SERIAL PRIMARY KEY,
        userId integer,
        listingId integer,
        date date,
        reviewText text,
        accuracyRating integer,
        communicationRating integer,
        cleanlinessRating integer,
        locationRating integer,
        check_In_Rating integer,
        valueRating integer
        )`;

  pg.query(createUserTableText)
    .then(res => console.log("Successfully Created users table", res))
    .catch(err => console.log("Error with users table creation", err));

  pg.query(createRecordsTableText)
    .then(res => console.log("Successfully Created records table", res))
    .catch(err => console.log("Error with records table creation", err));

// pg.query(createUserTableText)
//   .then(res => console.log("Successfully Created users table", res))
//   .catch(err => console.log("Error with users table creation", err));

// pg.query(createRecordsTableText)
//   .then(res => console.log("Successfully Created records table", res))
//   .catch(err => console.log("Error with records table creation", err));

// from the database directory, run the following command to build schema:
// node pg-schema.js