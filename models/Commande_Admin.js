const mongoose = require("mongoose");
const Commande_AdminSchema = new mongoose.Schema({
  user_id: String,
  validate: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: [
      {
        product_id: String,
        product_name: String,
        qt: Number,
        price: Number,
      },
    ],
    default: [],
  },
});

const Commande_Admin = mongoose.model("commande", Commande_AdminSchema);
module.exports = Commande_Admin;
