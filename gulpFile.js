const sass = require('gulp-sass')(require('sass')); // Importing gulp-sass
const gulp = require('gulp');  // Importing gulp
const sourceMaps = require('gulp-sourcemaps'); // Importando gulp-sourcemaps
const uglify = require('gulp-uglify'); // Importando gulp-uglify
const obfuscate = require('gulp-obfuscate'); // Importando gulp-obfuscate
const imagemin = require('gulp-imagemin'); // Importando gulp-imagemin

function comprimeImagens() {
  return gulp
    .src('./source/images/*') // Pega todos os arquivos dentro da pasta images
    .pipe(imagemin()) // Minifica as imagens
    .pipe(gulp.dest('./build/images')); // Salva os arquivos compilados na pasta images
}

function comprimeJavaScript() {
  return gulp
    .src('./source/scripts/*.js') // Pega todos os arquivos .js dentro da pasta scripts
    .pipe(uglify()) // Minifica os arquivos JavaScript
    .pipe(obfuscate()) // Ofusca os arquivos JavaScript
    .pipe(gulp.dest('./build/scripts')); // Salva os arquivos compilados na pasta js
}

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

// // export default funcaoPadrao;
// exports.compilaSass = compilaSass;
exports.default = function () {
  gulp.watch(
    './source/styles/*.scss',
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  gulp.watch(
    './source/scripts/*.js',
    { ignoreInitial: false },
    gulp.series(comprimeJavaScript)
  );
  gulp.watch(
    './source/images/*',
    { ignoreInitial: false },
    gulp.series(comprimeImagens)
  );
};
// exports.comprimeJavaScript = comprimeJavaScript;
// exports.images = comprimeImagens;