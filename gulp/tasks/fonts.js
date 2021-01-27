const gulp = require('gulp')
ttf2woff = require('gulp-ttf2woff'), // конвертация ttf в woff
  ttf2woff2 = require('gulp-ttf2woff2'), // конвертация ttf в woff2

  module.exports = function fonts() {
    gulp.src('src/fonts/*')
      .pipe(ttf2woff())
      .pipe(gulp.dest('docs/fonts'));
    return gulp.src('src/fonts/*')
      .pipe(ttf2woff2())
      .pipe(gulp.dest('docs/fonts'));
  }


