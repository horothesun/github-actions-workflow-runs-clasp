const { getConfigWorkflows } = require('../src/importGitHubActionsWorkflows.js')

test('getConfigWorkflows() has placeholder values', () => {
  expect(getConfigWorkflows().workflow_read_token).toBe('WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY')
})
