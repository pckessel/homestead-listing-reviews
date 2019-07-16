/*-------- Begin directions ----------

if boardsMockData is not built do this:
-->comment out const boardName at top
--> uncomment const boardsWritebaleStream.

once boardsMockData is built do this:
--> go to boardsMockData.js file and export the whole file. module.exports = {}
--> next uncomment const boardNames up top.
--> next comment out const boardsWriteableStream
--> in terminal, run this file. "node pathtofile/generateData.js"
--> Data generation done.

To insert into PSQL
from psql to copy into users table:
COPY users(id,first_name,last_name)
FROM '/Users/philkessel/interest-board/database/mockData/userMockData.csv' DELIMITER ',' CSV;

from psql to copy into records table:
COPY records(id,board_name,link,notes)
FROM '/Users/philkessel/interest-board/database/mockData/recordsMockData.csv' DELIMITER ',' CSV;

----------- End Directions -------------*/

//-------------Begin usersMockData and recordsMockData-----------//

const Chance = require("chance");
const chance = new Chance();
const fs = require("fs");
const path = require("path");
const { Readable } = require("stream");
const reviewsPath = path.join(
  path.normalize(path.join(__dirname, "..")),
  "mockData/reviewsData.csv"
);
const reviewsWriteableStream = fs.createWriteStream(reviewsPath);

const generateRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let reviewCounter = 1;
const inReviewsStream = new Readable({
  read() {
    let userId = generateRandomNum(1, 100);
    let listingId = generateRandomNum(1, 100);
    let date = chance.date({ string: true });
    let reviewText = chance.paragraph();
    let accuracyRating = generateRandomNum(1, 5);
    let communicationRating = generateRandomNum(1, 5);
    let cleanlinessRating = generateRandomNum(1, 5);
    let locationRating = generateRandomNum(1, 5);
    let check_In_Rating = generateRandomNum(1, 5);
    let valueRating = generateRandomNum(1, 5);
    let dataString = `${userId},${listingId},${date},${reviewText}, ${accuracyRating}, ${communicationRating},${cleanlinessRating}, ${locationRating}, ${check_In_Rating}, ${valueRating}\n`;

    this.push(dataString);
    if (reviewCounter >= 100) {
      this.push(null);
    }
    reviewCounter++;
  }
});

inReviewsStream.pipe(reviewsWriteableStream);
console.log("done with Reviews data creation");

/******************************************/

const usersPath = path.join(
  path.normalize(path.join(__dirname, "..")),
  "mockData/usersData.csv"
);
const userWriteableStream = fs.createWriteStream(usersPath);

let userCounter = 1;
const inUserStream = new Readable({
  read() {
    let userName = chance.name();
    let userImageNumber = generateRandomNum(1, 11);
    let dataString = `${userName},${userImageNumber}\n`;

    this.push(dataString);
    if (userCounter >= 100) {
      this.push(null);
    }
    userCounter++;
  }
});

inUserStream.pipe(userWriteableStream);
console.log("done with users data creation");