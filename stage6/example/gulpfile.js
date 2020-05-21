let gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  del = require('del'),
  path = require('path');

let styles = ['app/styles/styles.scss'],
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
    .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination));
});

gulp.task('watch', gulp.series('delete', 'styles', function () {
  return gulp.watch(['app/styles/**/*.scss'], gulp.series('styles'));
}));

gulp.task('build', gulp.series('delete', 'styles'));

function tildaResolver(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }
  return {file: url};
}


