const { config } = require('../src/config')

test('config.workflow_read_token has placeholder value', () => {
  expect(config.workflow_read_token).toBe('WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY')
})

test('config.updateCellMinutes is defined', () => {
  expect(config.updateCellMinutes).toBeDefined()
})
