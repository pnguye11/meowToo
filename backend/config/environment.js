var _ = require('lodash');

var localEnvVars = {
  TITLE:      'sic',
  SAFE_TITLE: 'sic',
  superSecret: 'templateforever'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
