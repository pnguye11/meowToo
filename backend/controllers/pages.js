var welcome = function(req, res, next) {
  res.json({message: "Welcome"});
};

module.exports = {
  welcome: welcome
};
