var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('concat', function() {
    return gulp.src('source/css/**/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass', function() {
    return gulp.src('source/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

var vendorjs = [
'bower_components/jquery/dist/jquery.min.js',
'bower_components/bootstrap/dist/js/bootstrap.min.js'
]

gulp.task('vjs', function() {
    return gulp.src(vendorjs)
        .pipe(concat('vender.js'))
        .pipe(gulp.dest('./public/js'));
});


gulp.task('watch', function() {
	gulp.watch('source/sass/**/*.scss', ['sass'])
})

gulp.task('default', ['concat','sass','vjs','watch']);