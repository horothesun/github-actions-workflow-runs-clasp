function loadConfig() {
  let config = require('./config.json')
  return config
}

module.exports = { loadConfig }
