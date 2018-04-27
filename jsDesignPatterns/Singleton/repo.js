var repo = function () {
  var called = 0;

  var save = function (task) {
    called++;
    console.log(`Saving ${task} & the save function has been called ${called} time(s)`);
  }
  console.log(`new task repo instance created `);
  return {save: save}
}

module.exports = repo(); // execute function from module.exports to create a singleton  