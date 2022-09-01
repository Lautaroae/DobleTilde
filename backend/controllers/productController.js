const Product = require("../models/Product");
const { errorHandler } = require("../helpers/dberrorHandler");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    const { product, description, category } = fields;
    let products = new Product(fields);
    if (files.image) {
      if (files.image.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1MB in size",
        });
      }
      products.image.data = fs.readFileSync(files.image.path);
      products.image.contentType = files.image.type;
    }
    products.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }
      res.json(result);
    });
  });
};
exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "product";
  Product.find()
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "product not found",
        });
      }
      res.json(products);
    });
};
exports.remove = (req, res) => {
  let products = req.products;
  products.remove((err, deleteProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Product was seccessfully deleted",
    });
  });
};
exports.productById = (req, res, id, next) => {
  Product.findById(id)
    .populate("category")
    .exec((err, products) => {
      if (err || !products) {
        return res.status(400).json({
          error: "Product was not found or does not exist",
        });
      }
      req.products = products;
      next();
    });
};
exports.image = (req, res, next) => {
  if (req.product.image.dat) {
    res.set("Content-Type", req.product.image.contentType);
    return res.send(req.product.image.data);
  }
  next();
};
