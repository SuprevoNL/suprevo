var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src([
        'src/scss/*.scss'
    ])
        .pipe(sass({outputStyle: 'compressed'}))
        // .pipe(concatCSS('bundle.css'))
        // .pipe(cleanCSS())
        .pipe(gulp.dest('dist/resource/css'))
        .pipe(browserSync.stream());
});

gulp.task('server', function () {
    browserSync.init({
        server: "./"
    })
})

gulp.task('default', ['server', 'sass'], function(){
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});