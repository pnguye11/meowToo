// Require mongoose to create a model.
var mongoose = require('mongoose'),
    User     = require('./user.js');

// Create a schema of your model
var productSchema = new mongoose.Schema({
  name:       String,
  category:   String,
  user:       { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

// Create the model using your schema.
var Product = mongoose.model('Product', productSchema);

// Export the model of the Product.
module.exports = Product;
