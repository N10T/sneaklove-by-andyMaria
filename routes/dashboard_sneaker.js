const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("./../models/Sneaker");
const tagModel = require("./../models/Tag");
const protectRoute = require("./../middlewares/protectRoute");

// CREATE PRODUCTS & TAGS

router.get("/prod-add", protectRoute, (req, res) => {
  tagModel.find().then(dbRes => {
    const tags = dbRes;
    res.render("products_add", { tags });
  });
});

router.post("/prod-add", protectRoute, (req, res, next) => {
  const {
    name,
    ref,
    sizes,
    price,
    image,
    description,
    category,
    id_tags
  } = req.body;
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
        req.flash("success", "product successfully created");
        res.redirect("/prod-add");
    })
    .catch(next);
});

router.post("/tag-add", protectRoute, (req, res, next) => {
  const { label } = req.body;
  tagModel
    .create({
      label
    })
    .then(() => {
      res.redirect("/prod-add");
    })
    .catch(next);
});

// MANAGE PRODUCTS

router.get("/prod-manage", protectRoute, (req, res, next) => {
  sneakerModel
    .find()
    .then(sneakers => {
      res.render("products_manage", { sneakers });
    })
    .catch(dbErr => {
      console.log(
        `Oh no... a problem happend with the database and the products_manage page`
      );
    });
});

// DELETE PRODUCT
router.get("/product-delete/:id", protectRoute, (req, res, next) => {
  sneakerModel
    .findByIdAndDelete(req.params.id)
    .then(sneaker => {
      console.log(sneaker.name, " delete");
      res.redirect("/prod-manage");
    })
    .catch(dbErr => {
      console.log(
        `Oh no... a problem happend with the database and the delete button`
      );
    });
});

// UPDATE PRODUCT
router.get("/product-edit/:id", protectRoute, (req, res, next) => {
  Promise.all([
    tagModel.find(),
    sneakerModel.findById(req.params.id).populate("id_tags")
  ])
    .then(dbRes => {
      console.log(dbRes, " go update page");
      res.render("product_edit", { sneaker: dbRes[1], tags: dbRes[0] });
    })
    .catch(dbErr => {
      console.log(
        `Oh no... a problem happend with the database and the update of ${dbErr}`
      );
    });
});

router.post("/product-edit/:id", protectRoute, (req, res, next) => {
  const {
    name,
    ref,
    sizes,
    price,
    image,
    description,
    category,
    id_tags
  } = req.body;

  sneakerModel
    .findByIdAndUpdate(req.params.id, {
      name,
      ref,
      sizes,
      price,
      image,
      description,
      category,
      id_tags
    })
    .then(sneaker => {
      console.log(sneaker.name, " have been updated");
      res.redirect("/prod-manage");
    })
    .catch(dbErr => {
      console.log(
        `Oh no... a problem happend with the database and the update of ${dbErr}`
      );
    });
});

module.exports = router;
