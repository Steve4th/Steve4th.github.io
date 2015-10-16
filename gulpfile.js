var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');

gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function() {
    gulp.watch('*.less', ['less']);
})