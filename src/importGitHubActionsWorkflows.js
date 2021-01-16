function IMPORTGITHUBACTIONSWORKFLOWS(owner, repo, perPage) {
  try {
    const url = workflowsUrl(owner, repo, perPage)
    const workflows = fetchWorkflows(url)
    return workflowsTable(workflows)
  } catch(err) {
    return `Error getting data: ${err}`
  }
}

function workflowsUrl(owner, repo, perPage) {
  return `https://api.github.com/repos/${owner}/${repo}/actions/workflows?per_page=${perPage}`
}

function fetchWorkflows(url) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${config.workflow_read_token}`
  }
  const response = UrlFetchApp.fetch(url, { headers: headers })
  const content = response.getContentText()
  return JSON.parse(content).workflows
}

function workflowsTable(workflows) {
  var rows = [ ['id', 'name', 'path', 'state', 'created_at', 'updated_at'] ]
  for (i = 0; i < workflows.length; i++) {
    const workflow = workflows[i]
    const createdAtDate = new Date(workflow.created_at)
    const updatedAtDate = new Date(workflow.updated_at)
    rows.push([workflow.id, workflow.name, workflow.path, workflow.state, createdAtDate, updatedAtDate])
  }
  return rows
}
