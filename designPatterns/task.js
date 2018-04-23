var Repo = require('./taskRepo');
var Task = function (data) {
  this.name = data.name;
  this.completed = data.completed;
}

Task.prototype.complete = function () {
  console.log(`completing ${this.name}`)
  this.completed = true;
}
Task.prototype.save = function () {
  // console.log(`saving ${this.name}`);
  Repo.save(this);
}
module.exports = Task