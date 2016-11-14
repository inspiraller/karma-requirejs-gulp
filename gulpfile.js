var gulp = require('gulp');
var KarmaTestServer = require('karma').Server;


gulp.task('testKarma', function (done) {

  new KarmaTestServer({
    configFile: require('path').resolve('karma.conf.js'),
    singleRun: false

/*
    "browsers": ["Chrome"]
*/
  }, function(error){

  	error = error ? new Error('Karma returned with the error code: ' + error) : undefined;

    done(error);

  }).start();

});


gulp.task('default', ['server']);
