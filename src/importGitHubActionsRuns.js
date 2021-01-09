function IMPORTGITHHUBACTIONSRUNS(owner, repo, workflowId, perPage, ignoredArg) {
  try {
    let url = runsUrl(owner, repo, workflowId, perPage)
    let runs = fetchRuns(url)
    return runsTable(runs)
  } catch(err) {
    return `Error getting data: ${err}`
  }
}

function runsUrl(owner, repo, workflowId, perPage) {
  return `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs?per_page=${perPage}`
}

function fetchRuns(url) {
  let headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${config.workflow_read_token}`
  }
  let response = UrlFetchApp.fetch(url, { headers: headers })
  let content = response.getContentText()
  return JSON.parse(content).workflow_runs
}

function runsTable(runs) {
  var rows = [ ['run_id', 'start_date', 'duration', 'status', 'conclusion'] ]
  for (i = 0; i < runs.length; i++) {
    let run = runs[i]
    let startDate = new Date(run.created_at)
    let endDate = new Date(run.updated_at)
    let durationInSeconds = (endDate.getTime() - startDate.getTime()) / 1000
    rows.push([run.id, startDate, durationInSeconds, run.status, run.conclusion])
  }
  return rows
}
