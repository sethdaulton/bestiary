// routes for adding and retrieving monster data

const withAuth = require('../../utils/auth');
const { Monster } = require('../../models');
const router = require('express').Router();

router.post('/createmonster', withAuth, async (req, res) => {
  try {
    const newMonster = await Monster.create({
      ...req.body,
      monster_id: req.session.monster_id,
    });

    res.status(200).json(newMonster);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;