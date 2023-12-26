const mongoose = require("mongoose");
const shopSchema = new mongoose.Schema({
 Product_name: String,
 Product_img: String,
Category:String,
 Description: String,
Price: String,
  validat: { type: Boolean, default: false },
  shoping: { type: [String], default: []},
  favoris: { type: [String], default: [] },
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
