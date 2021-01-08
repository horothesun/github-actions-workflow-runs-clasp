(
  cd src

  sed -i .bak "s/WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY/$1/" importGitHubActionsWorkflows.js
  sed -i .bak "s/WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY/$1/" importGitHubActionsRuns.js

  rm *.bak
)
