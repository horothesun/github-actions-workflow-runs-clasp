const { config } = require('../src/importGitHubActionsRuns')

test('config has placeholder values', () => {
  expect(config.workflow_read_token).toBe('WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY')
})
