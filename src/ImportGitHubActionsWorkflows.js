function getConfig() {
  return {
    'workflow_read_token': 'WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY'
  }
}

// function IMPORTGITHUBACTIONSWORKFLOWS(owner, repo, perPage) {
//   try {
//     let url = workflowsUrl(owner, repo, perPage)
//     let workflows = fetchWorkflows(url)
//     return workflowsTable(workflows)
//   } catch(err) {
//     return `Error getting data: ${err}`
//   }
// }

// function workflowsUrl(owner, repo, perPage) {
//   return `https://api.github.com/repos/${owner}/${repo}/actions/workflows?per_page=${perPage}`
// }

// function fetchWorkflows(url) {
//   let headers = {
//     'Accept': 'application/vnd.github.v3+json',
//     'Authorization': `token ${getConfig().workflow_read_token}`
//   }
//   let response = UrlFetchApp.fetch(url, { headers: headers })
//   let content = response.getContentText()
//   return JSON.parse(content).workflows
// }

// function workflowsTable(workflows) {
//   var rows = [ ['id', 'name', 'path', 'state', 'created_at', 'updated_at'] ]
//   for (i = 0; i < workflows.length; i++) {
//     let workflow = workflows[i]
//     let createdAtDate = new Date(workflow.created_at)
//     let updatedAtDate = new Date(workflow.updated_at)
//     rows.push([workflow.id, workflow.name, workflow.path, workflow.state, createdAtDate, updatedAtDate])
//   }
//   return rows
// }

// console.log(IMPORTGITHUBACTIONSWORKFLOWS('horothesun', 'python-sample', 100))

module.exports = { getConfig }
