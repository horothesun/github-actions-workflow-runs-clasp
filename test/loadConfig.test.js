const { loadConfig } = require('../src/loadConfig')

test('loadConfig() loads src/config.json', () => {
  expect(loadConfig().workflow_read_token).toBe('DO NOT SPECIFY - POPULATED AUTOMATICALLY')
})
