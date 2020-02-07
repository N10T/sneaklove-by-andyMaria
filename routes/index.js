const express = require("express");
const router = express.Router();
const sneakerModel = require("./../models/Sneaker");
const categoties = ["collection","men", "women", "kids"]
router.get("/", (req, res) => {
  res.render("index");
});


router.get("/sneakers/:cat", (req, res, next) => {
  const categoryClicked =  req.params.cat
          sneakerModel
            .find(categoryClicked === "collection" ? null :{category: categoryClicked})
            .then(sneakers => {
              res.render("products", { sneakers });
            })
            .catch(dbErr => {
              console.log(`Oh no... a problem append with the ${categoryClicked} category`);
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
