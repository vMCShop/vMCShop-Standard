const path = require('path');
const aliasesConfig = require('../webpack.config');

module.exports = async ({ config, mode }) => {
  config.module.rules.push(aliasesConfig);

  return config;
};
