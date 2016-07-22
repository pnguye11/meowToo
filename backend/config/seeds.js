var mongoose = require('./database');

var User = require('../models/user');
var Product = require('../models/product')

var users = [
  { // 0
    email: "hi@ymail.com",
    password:   "abc123"
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


var products = [
  { // 0
    title: 'You Can Do it',
      imageUrl: 'assets/img/youcan.jpg',
      price: 25,
      stock: 250,
      description: 'You Can Do it!'
    }, {
      title: 'Mug',
      imageUrl: 'assets/img/mug.png',
      price: 15,
      stock: 100,
      description: 'Drink Me!'
    }, {
      title: 'coffee mug',
      imageUrl: 'assets/img/cuphoodie.jpg',
      price: 8,
      stock: 50,
      description: "You're Purrrrfect!"
    }

];



Product.remove({}, function(err) {
  if (err) console.log(err);

  User.remove({}, function(err) {
    if (err) console.log(err);

    // create users
    User.create(users, function(err, users) {

      var products = [
        { // 0
          title: 'You Can Do it',
            image: 'assets/img/youcan.jpg',
            price: 25,
            stock: 250,
            description: 'You Can Do it!'
          }, {
            title: 'Mug',
            image: 'assets/img/mug.png',
            price: 15,
            stock: 100,
            description: 'Drink Me!'
          }, {
            title: 'coffee mug',
            image: 'assets/img/cuphoodie.jpg',
            price: 8,
            stock: 50,
            description: "You're Purrrrfect!"
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


