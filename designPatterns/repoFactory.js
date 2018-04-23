var repoFactory = function () {
  this.getRepo = function (repoType) {
    if (repoType === 'task') {
      if (this.taskRepo) {
        return this.taskRepo
      } else {
        this.taskRepo = require('./taskRepo')(); 
        return this.taskRepo;
      }
    }
    if (repoType === 'user') {
      var userRepo = require('./userRepo')();
      return userRepo;
    }
    if (repoType === 'project') {
      var projectRepo = require('./projectRepo')();
      return projectRepo;
    }
  }
}