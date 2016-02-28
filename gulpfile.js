const gulp = require('gulp')
const sass = require('gulp-sass')
const bourbonPaths = require('bourbon').includePaths

gulp.task('sass', function () {
  return gulp.src('./sass/layitout.sass')
    .pipe(sass({
      indentedSyntax: true,
      outputStyle: 'compressed',
      includePaths: bourbonPaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

gulp.task('default', ['sass'])
