var mongoose = require('./database');
var User     = require('../models/user');
var Product  = require('../models/product');
// var Category = require('../models/category');

var users = [
  { // 0
    email: "hi@ymail.com",
    password:   "abc123",
    role: "admin",
  },

];

// User.remove({}, function(err) {
//   if (err) console.log(err);
//   User.create(users, function(err, users) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + users.length  + " users.");
//       mongoose.connection.close(function(err) {
//         if (err) console.log(err);
//         process.exit(0);
//       });
//     }
//   });
// });

// var categories = [ "Shoes", "Apparels", "Misc" ];

Product.remove({}, function(err) {
  if (err) console.log(err);

  User.remove({}, function(err) {
    if (err) console.log(err);

    // create users
    User.create(users, function(err, users) {

      var products = [
        {
            title: 'You Can Do it',
            image: 'assets/img/cat1.jpg',
            price: 25,
            description: 'You Can Do it!',
            category: "Shoes",
          }, {
            title: 'Mug',
            image: 'assets/img/mug.png',
            price: 15,
            description: 'Drink Me!',
            category: "Misc",
          }, {
            title: 'coffee mug',
            image: 'assets/img/cuphoodie.jpg',
            price: 8,
            description: "You're Purrrrfect!",
            category: "Apparels",
          }

        ];

      Product.create(products, function(err, products) {

        if (err) {
          console.log(err);
        } else{
          console.log(`Database seeded with ${users.length} users and ${products.length} products`);

          // disconnect db
          mongoose.connection.close();
        }
        process.exit();
      });
    });
  });
});


