const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  label: {
      type: String,
      enum: ["casual", "sport", "work", "street", "clowny", "trashy", "oldfashion"],
    }
});

const tagModel = mongoose.model("Tag", tagSchema);

module.exports = tagModel;
