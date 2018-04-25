var repo = function (origin) {
  var called = 0;

  var save = function (task) {
    called++;
    console.log(`Saving ${task} & the save function has been called ${called} time(s) in ${origin}`);
  }
  console.log(`new task repo instance created in ${origin}`);
  return {save: save}
}

module.exports = repo;