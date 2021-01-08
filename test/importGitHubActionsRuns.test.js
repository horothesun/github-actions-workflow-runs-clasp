const { getConfig } = require('../src/importGitHubActionsRuns.js')

test('getConfig() has placeholder values', () => {
  expect(getConfig().workflow_read_token).toBe('WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY')
})
