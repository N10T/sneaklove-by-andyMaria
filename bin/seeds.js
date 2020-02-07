const sneakerModel = require("../models/Sneaker");
const tagModel = require("../models/Tag");
const mongoose = require("mongoose");
var indexImg = -1
function addimage(){
  indexImg += 1
  return ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgp7jHGRRbtVwNEfzMz-LtICqnXK3OsOLbLc7768v7TVsjnPxFDuysEPSOCZpEucaamonv8L_9UA&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1vkxVG4u91XtxxUHuJImLzJH0a-1BNiTXHdwyv1l6ITNS4se1VcfCHnF1PfiEg4e2qUwNCZrk&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcBM67--uTR3gpEpYtiYlGGC2QGDhCwED0BvN-8bSChgbamMGU",
"http://t0.gstatic.com/images?q=tbn%3AANd9GcSsUxcKYIVhTL-7Weu22etMefHR071bYFrXUTHnTfR8FbuZd95FNXXtEHb_HBae2xAawyB-IuXi&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4pEVVhbarWk8njTRJvruDf7sI5lLoeTf1NXmfw0F1XQ1rXACpSftu0PqkAT-Z5PNI1a2LE3I&usqp=CAc",
"http://t0.gstatic.com/images?q=tbn%3AANd9GcSTWMeV3f9zsbdxytgISJsMCTpeL0cUn3gGRRGqPvKoSftHZsLqKGemf7lUGOuxWxj3jZXB3LF1&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCM6YsQdinzHTHJYix3XjTE1FQ20OfU-LZxHZaBbsBAgkGp44GIyA7nEo89yFJZToFaorAZny&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjPMmDWUH7FB4hDpaA0PLkdaCE_c7WjQlcVqcf6DsqR4jQfTgqyWBL3HEYXWU4Aasqg6ZktUGE&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_v51b4Sw8hxmDAuVtLJuORrm5D0pjBlenwZdcRWOV8YAss5DTToYXulS0KVHLF2cgoAoXVi0&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-dk5U1jD4xGlpjzvwBQGwwzP1WducDZeCDXBWEVSPO9nwn39_WHRXp0TVxMcDequlp1ykgkM&usqp=CAc",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhtzWFj2rsTfUr4ylLu47eEs7wY1KJY-Mpx_dpYP4NqcRQLYnWulZ9wxQa_swv3gbCk61_JnwgQ&usqp=CAc",
"https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/fr/dw74def7a4/38SMA0047_Y37_01.jpg",
"https://api.meleven.de/out/buffalo/h_1100,w_1100,m_limit,o_resize/44.9f.7d.1533120side.jpg",
"https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_2/715x773/17f82f742ffe127f42dca9de82fb58b1/T/U/1544604427_KCK211OBE_S56B_E02_GHC.jpg",
"https://thehypestore.com/5986/puma-rs-x-reinvent-sneaker-371008-04-371008-04-puma-puma-femme.jpg",
"https://cdn.shopify.com/s/files/1/0018/4323/2814/products/EAF_Originales_front_1024x1024@2x.png?v=1564779618",
"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369449/02/sv01/fnd/PNA/fmt/png/RS-X-Toys-Men's-Sneakers",
"https://cdn.shopify.com/s/files/1/0018/4323/2814/products/EAF_Originales_front_1024x1024@2x.png?v=1564779618",
"https://api.meleven.de/out/buffalo/h_1100,w_1100,m_limit,o_resize/54.e2.4f.1533149side.jpg",
"https://www.chaussures.fr/media/catalog/product/cache/image/650x650/0/0/0000197850167-vans-sk8-hi_d5ib8c_black_black_white-ap-001.jpg",
"https://media.lexception.com/img/products/new-balance/89429-new-balance-sneakerscm997-01-zoom.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIIv6fS2sJKSd61SEN69S2i6_0uYVB42_NGkAP3etBzItSMwT5kLFuGXEtxCbCksofqjM2GIQ&usqp=CAc"
][indexImg]
}
function addref(){
  return String.fromCharCode(
    Math.floor(Math.random() * 78+42),
    Math.floor(Math.random() * 78+42),
    Math.floor(Math.random() * 78+42),
    Math.floor(Math.random() * 78+42),
    Math.floor(Math.random() * 78+42),
    Math.floor(Math.random() * 78+42),
    Math.floor(Math.random() * 78+42),
    Math.floor(Math.random() * 78+42)
    )
}

console.log(addref())

const sneakers = [
  {
    name: "7 places",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Fresh shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Italy Finest",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Fresh shoes 2",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Mocassin 2000",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Italien shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Mercury",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Be prepare for the snow",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Adidas Boost",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Best shoes for fashion people",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Air Jordan 1",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Basketball shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Air Jordan 2",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Fresh shoes",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Homeless 500",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "You'll feel like barefoot",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Tatane",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Not really shoes, no really flipflaps",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "TatOo",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Shoes of the day",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Babouche",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Wallah elles sont i'enb",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "SHhhuuuuu",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Rapid",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "SuperSabatia",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Top",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "zapatilla super",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "Kinky",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
  },
  {
    name: "Orteil 2000",
    ref: addref(),
    sizes: Math.floor(Math.random() * 30 + 16),
    price: Math.floor(Math.random() * 80 + 40),
    description: "sell by pair",
    category: ["men", "women", "kids"][Math.round(Math.random() * 2)],
    image: addimage()
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
