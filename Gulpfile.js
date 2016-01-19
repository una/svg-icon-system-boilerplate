'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');

// SVG Config
var config = {
  mode: {
    symbol: { // symbol mode to build the SVG
      render: {
        css: true, // CSS output
        scss: true // SCSS output
      },
      dest: 'sprite', // destination folder
      prefix: '.svg--%s',
      sprite: 'sprite.svg', //sprite name
      example: true // Build sample page
    }
  }
};


gulp.task('sprite-page', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'));
});

gulp.task('sprite-shortcut', function() {
  return gulp.src('sprite/sprite.svg')
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['sprite-page', 'sprite-shortcut']);
