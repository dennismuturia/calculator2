var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production
var del = require('del');

gulp.task('jsBrowserify',['concatInterface'],function(){
  return browserify({entries:["../tmp/allConcat.js"] })
  .bundle()
  .pipe(source('apps.js'))
  .pipe(gulp.dest('../build/js'));
});

gulp.task('concatInterface', function(){
  return gulp.src(['scripts-front.js', 'sign_up_interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('../tmp'));
});

gulp.task('minifyScripts',['jsBrowserify'], function(){
  return gulp.src("../build/js/apps.js")
  .pipe(uglify())
  .pipe(gulp.dest("../build/js"));
});

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
