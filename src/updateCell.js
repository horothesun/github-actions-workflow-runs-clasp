function updateRunsConfigC2Cell() {
  const randomInt = Math.ceil(10000 * Math.random())
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Runs config').getRange('C2').setValue(randomInt)
}
