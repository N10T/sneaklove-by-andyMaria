const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ref: String,
  sizes: Number,
  price: Number,
  description: String,
  image: String,
  category: {
      type: String,
    enum: ["men", "women", "kids"],
 },
  id_tags: {
    type: Schema.Types.ObjectId,
    ref: "Tag"
  },
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = sneakerModel;