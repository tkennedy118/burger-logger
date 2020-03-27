const express = require(express);
const burger = require('../models/burger');

// declare router as an express router
const router = express.Router();

// ======================================== ROUTES ========================================

// route to get all burgers. uses burger model to create handlebars obj and renders object
// to index.handlebars
router.get("/", (req, res) => {
    const data = burger.all();
    const hbsObj = { burger: data };

    console.log(hbsObj);
    res.render("index", hbsObj);
});

// route to add a burger. get request body information and sends it into burger model 
// function. renders id of inserted burger
router.post("/api/burgers", (req, res) => {
    const col = "burger_name";
    const val = req.body.burger_name;

    const data = burger.insertOne(col, val);
    res.json({ id: data.indertId });
});

// route to update a burger. get request information and send it into burger model 
// function. responds with not found status if no rows are changed, otherwise responds
// with success status
router.put("/api/burgers/:id", (req, res) => {
    const col = "burger_name";
    const val = req.body.burger_name;
    const cond = "id = " + req.params.id;

    const data = burger.updateOne(col, val, cond);
    
    if (data.changedRows === 0) {
        res.status(404).end();
    } else {
        res.status(200).end();
    }
});

// ==================================================================================

module.exports = router;