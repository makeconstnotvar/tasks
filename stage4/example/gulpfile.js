let gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  del = require('del');

let styles = ['app/styles/styles.scss', 'app/styles/fonts.scss'],
  destination = 'app/build';

gulp.task('delete', function () {
  return del(['build/*.css', 'build/*.css.map'])
});

gulp.task('clean', function () {
  return del(['build/*'])
});

gulp.task('styles', function () {
  return gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination));
});

gulp.task('watch', gulp.series('delete', 'styles', function () {
  return gulp.watch(['app/css/**/*.scss'], gulp.series('styles'));
}));

gulp.task('debug', gulp.series('delete', 'styles'));




