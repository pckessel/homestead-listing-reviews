exports.up = knex => {
  return knex.schema
    .createTable("users", table => {
      table.increments('userId').primary();
      table.string('userName');
      table.string('userImage');
    })
    .createTable("reviews", table => {
      table.increments('reviewId').primary();
      table.integer('userId');
      table.integer('listingId');
      table.date('date');
      table.text('reviewText');
      table.integer('accuracyRating');
      table.integer('communicationRating');
      table.integer('cleanlinessRating');
      table.integer('locationRating');
      table.integer('check_In_Rating');
      table.integer('valueRating');
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("reviews");
};

// table
//         .integer('userId')
//         .unsigned()
//         .references('userId')
//         .inTable("users")
//         .onDelete('SET NULL');