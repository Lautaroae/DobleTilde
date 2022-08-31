const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    image: String,
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
