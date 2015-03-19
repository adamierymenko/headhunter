var GitHubApi = require("github");
var async = require("async");

var github = new GitHubApi({
  version: "3.0.0",
  protocol: "https"
});

if (process.argv.length < 4) {
  console.log('Usage: headhunter.js <GitHub API token> <location>');
  process.exit(1);
}

github.authenticate({
  type: "token",
  token: process.argv[2]
});

var users = [];
var wantUsers = -1;
var pageNumber = 0;

var location = process.argv[3];

async.series([
  function(nextStep) {
    async.whilst(
      function() { return ((wantUsers < 0)||(users.length < wantUsers)); },
      function(nextPage) {
        github.search.users({
          q: 'location:"' + location + '"',
          page: pageNumber,
          per_page: 100
        },function(err,result) {
          if (err)
            return nextStep(err);
          if (result.items)
            users = users.concat(result.items);
          if ((wantUsers < 0)&&(result.total_count))
            wantUsers = result.total_count;
          //console.log('got page '+pageNumber);
          pageNumber += 1;
          return nextPage(null);
        });
      },
      nextStep
    );
  },
  function(nextStep) {
    async.eachSeries(users,function(user,nextUser) {
      github.repos.getFromUser({
        user: user.login,
        sort: 'updated',
        direction: 'desc',
        page: 0,
        per_page: 100
      },function(err,result) {
        if (result) {
          for(var i=0;i<result.length;++i) {
            if ((!result[i].fork)&&(result[i].full_name)) {
              console.log("git clone 'https://github.com/"+result[i].full_name+"' './heads/"+location+"/"+result[i].full_name+"'");
              console.log("sleep 30");
            }
          }
        }
        return nextUser(null);
      });
    },nextStep);
  }
],function(err) {
  if(err)
    console.log(err);
  process.exit(0);
});
