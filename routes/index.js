const express = require("express");
const router = express.Router();
const sneakerModel = require("./../models/Sneaker");
const categoties = ["collection","men", "women", "kids"]
router.get("/", (req, res) => {
  res.render("index");
});


function renderByCategerory(category) {
  if(category === "collection"){
    router.get(`/sneakers/${category}`, (req, res, next) => {
      sneakerModel
        .find()
        .then(sneakers => {
          res.render("products", { sneakers });
        })
        .catch(dbErr => {
          console.log("Oh no... database error");
        })
    })
  } else {  router.get(`/sneakers/${category}`, (req, res, next) => {
    sneakerModel
      .find({"category": `${category}`})
      .then(sneakers => {
        res.render("products", { sneakers });
      })
      .catch(dbErr => {
        console.log("Oh no... database error");
      })
  });}
}

categoties.forEach(category => renderByCategerory(category))

router.get("/sneakers/men", (req, res, next) => {
          sneakerModel
            .find({category: "men"})
            .then(sneakers => {
              res.render("products", { sneakers });
            })
            .catch(dbErr => {
              console.log("Oh no... database error");
            })
        });

router.get("/one-product/:id", (req, res, next) => {
  sneakerModel
    .findById({_id: req.params.id})
    .then(sneaker => {
      res.render("one_product", { sneaker });
    })
    .catch(dbErr => {
      console.log("Oh no... database error");
    })
});


router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});


module.exports = router;
