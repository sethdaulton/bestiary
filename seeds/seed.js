const sequelize = require('../config/connection');
const { User, Monster } = require('../models');

const userData = require('./userData.json');
const monsterData = require('./monsterData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // need to figure this out

};

seedDatabase();


// Notes on Monster Data
//
// AC = Armor Class 
//      Attack roll must be greater than this number in order for attack to hit
// HP = Hit Points
//      Damage lowers hit points.  If HP is ever less than or equal to 0 the monster die
// HD = Hit Dice (number of dice * which die to roll)
//      HP can be determined by rolling the appropriate dice or by taking the average of the
//      dice roll, dividing by two, and adding constitution bonus (con - 10) multiplied by challenge rating
// CR = Challenge Rating
//      The higher this number, the more difficult the monster is to defeat
// attack = (number of dice * which die to roll)
//      Gives the damage done with a successful attack
// str = strength
//      Adds to attack damage - physical power
// dex = dexterity
//      Determines ability to dodge and hide - agility
// con = constitution
//      Determines inventory slot amount and physical resistance to pain and poison - hardiness
// wis = wisdom
//      Adds to ranged damage and determines ability to understand surroundings - perception
// int = intelligence
//      Used in magic-related rolls, ability to recall lore - knowledge
// chr = charisma
//      Determiens social interactions - attractiveness