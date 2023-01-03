const { User } = require('../models');

const seedUser = () => User.bulkCreate([
  {
      "name": "Carlos",
      "password": "password12345"
  },

  {
      "name": "Johnson",
      "password": "password12345"
  },

  {
      "name": "Rivera",
      "password": "password12345"
  }
]);

module.exports = seedUser;