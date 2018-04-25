var repo = function () {
  var db = {};

  var get = function (id) {
    console.log(`Getting project with id ${id}`)
    return {name: "Let's learn JS"}
  }

  var save = function (user) {
    console.log(`Saving ${project.name}`)
  }
  return {get: get, save: save}
}

module.exports = repo();