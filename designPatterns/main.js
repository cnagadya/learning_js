var Task = require('./task');
var taskRepo = require('./taskRepo');
var userRepo = require('./userRepo');
var projectRepo = require('./projectRepo');
var repoFactory =  require('./repoFactory');

var task1 = new Task(taskRepo.get(1));
// var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = userRepo.get(1)
var project = projectRepo.get(1)
task1.user=user;
task1.project= project;

console.log(task1);