// Require the model/s you're controlling
var product  = require("../models/product");
var category = require("../models/product")

//||||||||||||||||||||||||||--
//  GET product
//||||||||||||||||||||||||||--
var productShow = function(req, res, next){
  var id = req.params.id;

  product.findById(id, function(err, product){
    if (err) {
      res.send(err);
    }

    // return that product as JSON
    res.json(product);
  });
};

//||||||||||||||||||||||||||--
// GET Products
//||||||||||||||||||||||||||--
var productsIndex = function(req, res) {
  product.find({}, function(err, products) {
    if (err) {
      res.send(err);
    }

    // return the products
    res.json(products);
  });
}

//||||||||||||||||||||||||||--
// CREATE product
//||||||||||||||||||||||||||--
var productCreate = function(req, res) {
  var product       = new product();   // create a new instance of the product model

  product.title      = req.body.title;
  product.price      = req.body.price;
  product.stock      = req.body.stock;
  product.image      = req.body.image;
  product.description      = req.body.description;
  // product.category  = req.body.category;

  product.save(function(err, savedProduct) {
    if (err) {
      res.send(err)
    }

    // log a message
    console.log("What a product!")
    // return the product
    res.json(savedProduct);
  });
};

//||||||||||||||||||||||||||--
// UPDATE product
//||||||||||||||||||||||||||--
var productUpdate = function(req, res) {
  var id = req.params.id;

  product.findById(id, function(err, product) {

    if (err) {
      res.send(err);
    }

    // set the new product information if it exists in the request
    if (req.body.title) product.title = req.body.title;
    if (req.body.price) product.price = req.body.price;
    if (req.body.stock) product.stock = req.body.stock;
    if (req.body.image) product.image = req.body.image;
    if (req.body.description) product.description = req.body.description;
    // if (req.body.category) product.category = req.body.category;

    // save the product
    product.save(function(err, updatedFish) {
      if (err) {
        res.send(err);
      }
      // log a message
      console.log("Oh, that's the product!");
      // return the product
      res.json(updatedProduct);
    });
  });
}

//||||||||||||||||||||||||||--
// DELETE product
//||||||||||||||||||||||||||--
var productDelete = function(req, res) {

  var id = req.params.id;

  product.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: 'Forget that product!' });
  });
}

// Export the function/s as JSON
module.exports = {
  productShow:    productShow,
  productsIndex:  productsIndex,
  productCreate:  productCreate,
  productUpdate:  productUpdate,
  productDelete:  productDelete
}
