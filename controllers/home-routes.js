// Navigates pages
const express = require("express");
const router = express.Router();
const { Monster } = require("../models");
const withAuth = require("../utils/auth");

//home page
router.get("/", function (req, res) {
    Monster.findAll().then((monsterData) => {
        let monsters = monsterData.map((m) => m.get({ plain: true }));
        res.render("homepage", { monsters })
    }).catch((err) => {
        res.status(500).json({ "error": err });
    })
});

//login page
router.get('/login', (req, res) => {
    res.render("login")
})

//create monster page
router.get('/createmonster', withAuth, (req, res) => {
    res.render("createmonster")
})

//signup page
router.get('/signup', (req, res) => {
    res.render("signup")
})

module.exports = router;