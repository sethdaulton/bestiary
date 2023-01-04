const  express = require ("express");
const router = express.Router();
const {Monster} = require("../models");

//login page
//
//

//signup page
//
//

//home page 
router.get ("/", function (req, res) {
    Monster.findAll().then((monsterData) => {
        let monsters = monsterData.map((m) => m.get({plain: true}));
        res.render("homepage", { monsters })
    }).catch((err) => {
        res.status(500).json({"error":err});
    })
});

module.exports = router;