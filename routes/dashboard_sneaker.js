const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("./../models/Sneaker");
const protectRoute = require("./../middlewares/protectRoute");

// CREATE PRODUCTS & TAGS

router.get("/prod-add", protectRoute,(req, res) => {
    res.render("products_add");
});

router.post("/prod-add", protectRoute, (req, res, next) => {
    const { name, ref, sizes, price, image, description, category, id_tags} = req.body;
    sneakerModel
    .create({
        name,
        ref,
        sizes,
        price,
        image,
        description,
        category,
        id_tags
    })
    .then(dbRes => {
        // req.flash("success", "product successfully created");
        res.redirect("/prod-add");
    })
    .catch(next);
});

module.exports = router;