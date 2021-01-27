const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const eslint = require('gulp-eslint')

module.exports = function script() {
  //gulp.src('src/js/**/*')
  //  .pipe(gulp.dest('docs/js/'))

  gulp.src('src/js/video-yt.js')
    .pipe(gulp.dest('docs/js'))

  return gulp.src('src/js/main.js')
    .pipe(plumber())
    .pipe(eslint({
      "rules": {
        "indent": [2, 2, { "SwitchCase": 1 }]
      }
    }))
    .pipe(eslint.format())
    //отмена в связи с отсутствием необходимости в минификации кода
    .pipe(webpack({
      mode: process.env.NODE_ENV,
      devtool: "source-map", //убирает минификацию кода, делает его многострочным
      output: {
        filename: '[name].js',
      }, //'[name].min.js' при вяключенном минификаторе
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'/*, {
                  "plugins": ["@babel/plugin-transform-runtime"]
                }*/],
              }
            }
          }
        ]
      },
      optimization: {
        minimize: false
      },
      plugins: [
        new CircularDependencyPlugin(),
        new DuplicatePackageCheckerPlugin()
      ]
    }))
    .pipe(gulp.dest('docs/js'))
}

