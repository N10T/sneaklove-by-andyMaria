const express = require("express");
const router = express.Router();
const sneakerModel = require("./../models/Sneaker");


router.get("/", (req, res) => {
  res.send("foo");
});

router.get("/sneakers/:cat", (req, res) => {
  res.send("bar");
});

router.post("/sneakers/:cat", (req, res) => {
  console.log("post =============================================>", req.body)
  if(req.body.category)){  const sneakerCategory = req.body.category;
  sneakerModel
    .find({sneakerCategory})
    .then(sneakers => {
      res.render("list-sneakers", { sneakers });
    })
    .catch(dbErr => {
      console.log("Oh no... database error");
    })} else {
      console.log("is not equal to a category--------------------------------------------------------------")
      res.send("check the console, you have a trouble with the category and req.body") //===============> to the same page ?
    }

});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});


module.exports = router;
