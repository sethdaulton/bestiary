// routes for adding and retrieving monster data
const router = require('express').Router();

const withAuth = require('../../utils/auth');
const Monster = require('../../models/Monsters');

router.post('/createmonster', withAuth, async (req, res) => {
  console.log('========================')
  console.log("monster creation route")
  console.log(req.body)
  try {
    const newMonster = await Monster.create({
      name: req.body.name,
      description: req.body.description,
      AC: req.body.ac,
      HD: req.body.hd,
      HP: req.body.hp,
      CR: req.body.cr,
      attack: req.body.attack,
      str: req.body.attack,
      dex: req.body.attack,
      con: req.body.con,
      wis: req.body.wis,
      int: req.body.int,
      chr: req.body.chr,
    });

console.log(this.name);

    req.session.save(() => {
      req.session.monster_id = newMonster.id;

      res.status(200).json(newMonster);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;