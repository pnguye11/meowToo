var User        = require('../models/user.js');

var userCreate = function(req, res) {
    var user   = new User();   // create a new instance of the User model
    user.email = req.body.email;  // set the users phone number (comes from the request)
    user.password     = req.body.password;  // set the users password (comes from the request)


    user.save(function(err) {
        if (err) {
          // duplicate entry
          if (err.code == 11000)
            return res.json({ success: false, message: 'A user with those digits already exists! '});
          else
            return res.json(err);
        }

        // return a message
        res.json({ message: "Let's get product'!" });
      });

};




var userShow = function(req, res) {
  User.findById(req.params.id, function(err, user) {
        if (err) res.send(err);

        // return that user
        res.json(user);
  });
};


module.exports = {
  userCreate,
  userShow
}
