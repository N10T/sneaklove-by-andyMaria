const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("./../models/Sneaker");
const protectRoute = require("./../middlewares/protectRoute");

// CREATE PRODUCTS

router.get("/products_add", protectRoute,(req, res) => {
    res.render("products_add");
});

module.exports = router;
