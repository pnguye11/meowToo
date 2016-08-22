var _ = require('lodash');

var localEnvVars = {
  TITLE:      'meowToo',
  SAFE_TITLE: 'meowToo',
  superSecret: 'templateforever'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
