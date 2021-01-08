const { getConfigRuns } = require('../src/importGitHubActionsRuns.js')

test('getConfigRuns() has placeholder values', () => {
  expect(getConfigRuns().workflow_read_token).toBe('WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY')
})
