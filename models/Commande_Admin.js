const mongoose = require("mongoose");
const Commande_AdminSchema = new mongoose.Schema({
  user_id: String,
  address: String,
  phone: Number,

  validate: {
    type: Boolean,
    default: false,
  },
  date: {
    user_id: String,

    type: Date,
    default: Date.now,
  },
  products: {
    type: [
      {
        product_id: String,
        product_name: String,
        qt: Number,
        price: String,
      },
    ],
    default: [],
  },
});

const Commande_Admin = mongoose.model("commande", Commande_AdminSchema);
module.exports = Commande_Admin;
