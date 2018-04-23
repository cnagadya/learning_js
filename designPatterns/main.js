var Task = require('./task');
var Repo =  require('./taskRepo');

var task1 = new Task(Repo.get(1));
var task2 = new Task({name:'sample 2'});

task1.complete();
task2.save();