var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production;
var browserSync = require('browser-sync').create();
//linter to run on all files in js folder//
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//concatenate all -interface.js and placing them in tmp folder//
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

//make all files ready for the browser//
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

//minifying scripts, Browserify must run first - then place in build folder//
gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

//delete old build and temp folders (when you run build)
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});


//BUILD
gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  // gulp.start('bower');
  // gulp.start('cssBuild');
});

//build a local server to work on your development build//
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
});
