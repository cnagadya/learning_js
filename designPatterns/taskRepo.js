var repo = function () {
  var db = {};

  var get = function (id) {
    console.log(`Getting task with id ${id}`)
    return {name: `task ${id}`}
  }

  var save = function (task) {
    console.log(`Saving ${task.name}`)
  }
console.log("Issa task repo")
  return {get: get, save: save}
}

module.exports = repo();