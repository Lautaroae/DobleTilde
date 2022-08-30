const express = require("express");
const router = express.Router();

const {
  list,
  create,
  remove,
  productById,
  image,
} = require("../controllers/productController");

router.get("/products", list);
router.post("/create", create);
router.get("/image/:productId", image);
router.delete("/:productId", remove);

router.param("productId", productById);
module.exports = router;
