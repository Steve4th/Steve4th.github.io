var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var jsmin = require('gulp-uglify');

gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function() {
    gulp.watch('./less/*.less', ['less']);
    gulp.watch('./js/site.js', ['js']);
})

gulp.task("js", function() {
   gulp.src('./js/site.js')
        .pipe(concat('site.min.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('./js/')); 
});