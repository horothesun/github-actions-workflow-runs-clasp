function IMPORTGITHHUBACTIONSRUNS(owner, repo, workflowId, perPage, ignoredArg) {
  try {
    const url = runsUrl(owner, repo, workflowId, perPage)
    const runs = fetchRuns(url)
    return runsTable(runs)
  } catch(err) {
    return `Error getting data: ${err}`
  }
}

function runsUrl(owner, repo, workflowId, perPage) {
  return `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs?per_page=${perPage}`
}

function fetchRuns(url) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${config.workflow_read_token}`
  }
  const response = UrlFetchApp.fetch(url, { headers: headers })
  const content = response.getContentText()
  return JSON.parse(content).workflow_runs
}

function runsTable(runs) {
  var rows = [ ['run_id', 'start_date', 'duration', 'status', 'conclusion'] ]
  for (i = 0; i < runs.length; i++) {
    const run = runs[i]
    const startDate = new Date(run.created_at)
    const endDate = new Date(run.updated_at)
    const durationInSeconds = (endDate.getTime() - startDate.getTime()) / 1000
    rows.push([run.id, startDate, durationInSeconds, run.status, run.conclusion])
  }
  return rows
}
