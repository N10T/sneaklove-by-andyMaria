const sneakerModel = require("../models/Sneaker");
const tagModel = require("../models/Tag");
const mongoose = require("mongoose");
const sneakers = [
  {
    name: "Air Force 1",
    ref: "iuzregehqqehzteqtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Fresh shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Air Force 2",
    ref: "iuzregehzte3564azegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Fresh shoes 2",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Mocassin 2000",
    ref: "iuzregehertreqqehzte43qtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Italien shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "MoonBoots",
    ref: "iu55erhthehqqehzteqtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Be prepare for the snow",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Adidas Boost",
    ref: "iuzreftjkxgehqqehzteqtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Best shoes for fashion people",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Air Jordan 1",
    ref: "iuzregehqqehzteqtfazjftyonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Basketball shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Air Jordan 2",
    ref: "iuzrzegegehqqehzteqtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Fresh shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Homeless 500",
    ref: "iuzregehqqehzt47eqtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "You'll feel like barefoot",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Tatane",
    ref: "iuzr99zregehqqehzteqtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Not really shoes, no really flipflaps",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  },
  {
    name: "Babouche",
    ref: "iuzregehaefqqehzteqtfazegfonlze36",
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Wallah elle sont i'enb",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)]
  }
];

const tags = [
  {
    label: "casual"
  },
  {
    label: "sport"
  },
  {
    label: "work"
  },
  {
    label: "street"
  },
  {
    label: "clowny"
  },
  {
    label: "trashy"
  },
  {
    label: "oldfashion"
  }
];



  mongoose
  .connect(`mongodb://localhost/sneak-love-by-andyMaria`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    sneakerModel
      .insertMany(sneakers)
      .then(dbRes => {
        console.log("sneakers created");
        tagModel
        .insertMany(tags)
        .then(dbRes => {
          console.log("tags created");
        })
        .catch(err => {
          console.log(" there was an error creating the tags");
        });
      })
      .catch(err => {
        console.log(" there was an error creating the sneakers");
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
