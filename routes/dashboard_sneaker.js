const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("./../models/Sneaker");
const protectRoute = require("./../middlewares/protectRoute");

// CREATE PRODUCTS

router.get("/prod-add", protectRoute,(req, res) => {
    res.render("products_add");
});

router.post("/prod-add", protectRoute, (req, res, next) => {
    
})

// MANAGE PRODUCTS

router.get("/prod-manage", protectRoute, (req, res, next) => {
    sneakerModel
    .find()
    .then(sneakers => {
      res.render("products_manage", { sneakers });
    })
    .catch(dbErr => {
      console.log(`Oh no... a problem happend with the database and the products_manage page`);
    })
})

// DELETE PRODUCT
router.get("/product-delete/:id", protectRoute, (req, res, next) => {
    sneakerModel
    .findByIdAndDelete(req.params.id)
    .then(sneaker => {
        console.log(sneaker.name, " delete")
        res.redirect("/prod-manage");
    })
    .catch(dbErr => {
      console.log(`Oh no... a problem happend with the database and the delete button`);
    })
})

module.exports = router;
