const express = require('express');
const burger = require('../models/burger');

// declare router as an express router
const router = express.Router();

// ======================================== ROUTES ========================================

// route to get all burgers. uses burger model to create handlebars obj and renders object
// to index.handlebars
router.get("/", async (req, res) => {

    const data = await burger.all();
    res.render("index", { burgers: data });
});

// route to add a burger. get request body information and sends it into burger model 
// function. renders id of inserted burger
router.post("/api/burgers", async (req, res) => {
    
    const data = await burger.insertOne("burger_name", req.body.burger_name);
    res.json({ id: data.indertId });
});

// route to update a burger. get request information and send it into burger model 
// function. responds with not found status if no rows are changed, otherwise responds
// with success status
router.put("/api/burgers/:id", async (req, res) => {
    const data = await burger.updateOne("burger_name", req.body.devoured, `id = ${req.params.id}`);
    
    if (data.changedRows === 0) {
        res.status(404).end();
    } else {
        res.status(200).end();
    }
});

// ==================================================================================

module.exports = router;