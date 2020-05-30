let gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  del = require('del');

gulp.task('delete', function () {
  return del(['build/*.css', 'build/*.css.map'])
});

gulp.task('styles', function () {
  return gulp.src('app/styles/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/build'));
});

gulp.task('watch', gulp.series('delete', 'styles', function () {
  return gulp.watch(['app/styles/**/*.scss'], gulp.series('styles'));
}));

gulp.task('build', gulp.series('delete', 'styles'));



