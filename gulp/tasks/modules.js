const gulp = require('gulp')

module.exports = function modules() {
  gulp.src('src/modules/**/*')
    .pipe(gulp.dest('docs/modules'))
  return gulp.src('src/*.php')
    .pipe(gulp.dest('docs'))
}

