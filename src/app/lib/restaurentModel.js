const { default: mongoose } = require("mongoose");

const restaurentModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  address: String,
  contact: String,
});

export const restaurentSchema =
  mongoose.models.restaurents || mongoose.model("restaurents", restaurentModel);
