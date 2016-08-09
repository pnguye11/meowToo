var mongoose     = require('mongoose'),
    Schema       = mongoose.Schema;


    /// category schema

    var categorySchema = new Schema({
      category : {
              type: String, required: true,
              enum: ["Shoes", "Apparels", "Misc"]
        },
    });

    //model using schema
var Category = mongoose.model("Category", categorySchema);

// export the model
module.exports = Category;
