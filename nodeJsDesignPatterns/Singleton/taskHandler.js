var repo = require('./repo')('taskHandler');
var taskHandler = function(){
  return{
    save:function (task) {
      repo.save(`${task}`);
    }
  }
}

module.exports = taskHandler();