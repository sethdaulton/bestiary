const { Monster } = require('../models');

const seedMonster = () => Monster.bulkCreate([
    {
        "name": "Goblin",
        "description": "A fearsome and cruel little creature.  Only about 3 feet tall, wiry, with green skin,",
        "AC": 11,
        "HD": "2d6",
        "HP": 6,
        "CR": 1,
        "attack": "1d6",
        "str": 8,
        "dex": 14,
        "con": 10,
        "wis": 10,
        "int": 8,
        "chr": 8
    },

    {
        "name": "Orc",
        "description": "Brutal, evil creatures with large tusks and twisted features",
        "AC": 12,
        "HD": "2d8+6",
        "HP": 17,
        "CR": 2,
        "attack": "1d12+1",
        "str": 16,
        "dex": 12,
        "con": 16,
        "wis": 11,
        "int": 7,
        "chr": 10
    },

    {
        "name": "Demogorgon",
        "description": "A huge demon bent on chaos and destruction.  The 20 ft tall creature possesses 2 apelike heads and tentacles in place of arms.",
        "AC": 21,
        "HD": "32d12+256",
        "HP": 736,
        "CR": 52,
        "attack": "3d12+9",
        "str": 29,
        "dex": 14,
        "con": 26,
        "wis": 20,
        "int": 17,
        "chr": 25
    }
]);

module.exports = seedMonster;