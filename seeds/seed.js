const sequelize = require('../config/connection');
const { User, Monster } = require('../models');

const userData = require('./userData.json');
const monsterData = require('./monsterData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

// need to figure this out

};
    
    seedDatabase();