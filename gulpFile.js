const sass = require('gulp-sass')(require('sass')); // Importing gulp-sass
const gulp = require('gulp');  // Importing gulp
const sourceMaps = require('gulp-sourcemaps'); // Importando gulp-sourcemaps


function compilaSass() {
  return gulp
    .src('./source/styles/main.scss') // Pega todos os arquivos *.scss dentro da pasta sass
    .pipe(sourceMaps.init()) // Inicializa o sourcemap
    .pipe(
      sass({
        outputStyle: 'compressed', // Formato de saída do CSS (compactado)
      })
    )
    .pipe(sourceMaps.write('./maps')) // Escreve o sourcemap na mesma pasta do arquivo CSS
    .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados na pasta css
}

// export default funcaoPadrao;
exports.compilaSass = compilaSass;
exports.watch = function () {
  gulp.watch(
    './source/styles/*.scss',
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  // gulp.watch(
  //   './source/scripts/*.js',
  //   { ignoreInitial: false },
  //   gulp.series(comprimeJavaScript)
  // );
  // gulp.watch(
  //   './source/images/*',
  //   { ignoreInitial: false },
  //   gulp.series(comprimeImagens)
  // );
};