var gulp         = require('gulp');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');
var notify       = require('gulp-notify');
var livereload   = require('gulp-livereload');
var lr           = require('tiny-lr');
var server       = lr();
var svgmin       = require('gulp-svgmin');
var svgSymbols   = require('gulp-svg-symbols');

gulp.task('styles', function() {
    return gulp.src('src/styles/main.less')
        .pipe(less())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('style'))
        .pipe(livereload(server))
        .pipe(notify({ message: 'Style compiled & reloaded' }));
});

gulp.task('svg-sprites', function() {
    return gulp.src('src/images/sprites/*.svg')
        .pipe(svgSymbols())
        .pipe(gulp.dest('images'))
        .pipe(livereload(server))
        .pipe(notify({ message: 'SVG compiled & reloaded' }));
});

gulp.task('scripts', function() {
    return gulp.src('src/scripts/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('scripts'))
        .pipe(livereload(server))
        .pipe(notify({ message: 'Script compiled & reloaded' }));
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(livereload(server))
        .pipe(notify({ message: 'Page reloaded' }));
});

gulp.task('watch', function() {
    server.listen(35729, function (err) {
        if (err) {
            return console.log(err);
        }
        gulp.watch('src/styles/**/main.less', ['styles']);
        gulp.watch('src/images/sprites/*.svg', ['svg-sprites']);
        gulp.watch('src/scripts/**/*.js', ['scripts']);
        gulp.watch('*.html', ['html']);
    });
});
