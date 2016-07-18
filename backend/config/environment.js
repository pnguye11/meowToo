var _ = require('lodash');

var localEnvVars = {
  TITLE:      'template',
  SAFE_TITLE: 'template',
  superSecret: 'templateforever'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
