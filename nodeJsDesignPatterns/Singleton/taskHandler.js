var repo = require('./repo');
var taskHandler = function(){
  return{
    save:function (task) {
      repo.save(`${task}`);
    }
  }
}

module.exports = taskHandler();