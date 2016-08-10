// Require mongoose to create a model.
var mongoose = require('mongoose'),
    User     = require('./user.js'),
    Category = require('./category.js'),
    Schema   = require.Schema;

// Create a schema of your model
var productSchema = new mongoose.Schema({
  category : {
              type: String, required: true,
              enum: ["Shoes", "Apparels", "Misc"]
  },
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 1 },
  description: String,
  image: { type: String }
});

// Create the model using your schema.
var Product = mongoose.model('Product', productSchema);

// Export the model of the Product.
module.exports = Product;
