var repoFactory = function () {
  var repos = this;
  var repoList = [
    {
      name: 'task',
      resource: './taskRepo'
    }, {
      name: 'user',
      resource: './userRepo'
    }, {
      name: 'project',
      resource: './projectRepo'
    }
  ]
  repoList.forEach(function (repoType) {
    repos[repoType.name] = require(repoType.resource)
  });
};

module.exports = new repoFactory;