const  express = require ("express");
const router = express.Router();

//login page
//
//

//signup page
//
//

//home page 
router.get ("/", function (req, res) {
    res.send("browser game home page");
});

module.exports = router;

// add monster page