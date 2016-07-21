// Require mongoose to create a model.
var mongoose = require('mongoose'),
    User     = require('./user.js');

// Create a schema of your model
var productSchema = new mongoose.Schema({
  image:       String,
  name:        String,
  size:        String,
  color:       String,
  description: String,
  user:       { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

// Create the model using your schema.
var Product = mongoose.model('Product', productSchema);

// Export the model of the Product.
module.exports = Product;
