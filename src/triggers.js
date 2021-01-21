function regenerateTriggers() {
  deleteAllTriggers()
  createTriggers()
}

function deleteAllTriggers() {
  ScriptApp.getProjectTriggers().forEach(trigger => ScriptApp.deleteTrigger(trigger))
}

function createTriggers() {
  const minutes = 10
  ScriptApp.newTrigger('updateRunsConfigC2Cell').timeBased().everyMinutes(minutes).create()
}
