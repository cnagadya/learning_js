var repo = function () {
  var db = {};

  var get = function (id) {
    console.log(`Getting user ${id}`)
    return {name: "Christine R. Nagadya"}
  }

  var save = function (user) {
    console.log(`Saving ${user.name}`)
  }
  return {get: get, save: save}
}

module.exports = repo();