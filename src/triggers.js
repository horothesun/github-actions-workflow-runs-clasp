function regenerateTriggers() {
  deleteAllTriggers()
  createTriggers()
}

function deleteAllTriggers() {
  ScriptApp.getProjectTriggers().forEach(trigger => ScriptApp.deleteTrigger(trigger))
}

function createTriggers() {
  const minutes = config.updateCellMinutes
  ScriptApp.newTrigger('updateRunsConfigC2Cell').timeBased().everyMinutes(minutes).create()
}
