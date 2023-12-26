const mongoose = require("mongoose");
const shopingCardSchema = new mongoose.Schema({
 User_id:String,
  validat: { type: Boolean, default: false },
  shoping: { type: [String], default: []},
});

const ShopCard = mongoose.model("shoping", shopingCardSchema);
module.exports = ShopCard;