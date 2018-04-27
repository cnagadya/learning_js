var Task = function(name){
  this.name = name;
  this.completed = false
}

Task.prototype.complete=function(){
  console.log(`completing task ${this.name}`);
  this.completed=true;
}

Task.prototype.save=function(){
  console.log(`saving task ${this.name}`);
}

var UrgentTask = function(name, priority){
  Task.call(this, name); // using the call fn to execute the task constructor
  this.priority = priority;
}

UrgentTask.prototype = Object.create(Task.prototype); // creates new obj for UT prototype out of 'tasks' prototype
UrgentTask.prototype.notify=function(){
  console.log("I'm urgent"); 
}
normalTask = new Task('Normal Task');
urgentTask = new UrgentTask('Urgent task', 1);
urgentTask.complete();
console.log( urgentTask, "||" ,normalTask);