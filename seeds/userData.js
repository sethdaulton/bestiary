const { User } = require('../models');

const seedUser = () => User.bulkCreate([
  {
      "username": "Carlos",
      "password": "password12345"
  },

  {
      "username": "Johnson",
      "password": "password12345"
  },

  {
      "username": "Rivera",
      "password": "password12345"
  }
],
{individualHooks:true}
);

module.exports = seedUser;