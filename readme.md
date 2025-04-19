# GULP - Studies

## Vamos iniciar um novo projeto no terminal

Mas antes precisamos instalar o `gulp globalmente`

```
npm install --global gulp-cli
```

Após isso iniciamos nosso projeto com o `node`

```
npm init
```

E vai Dando `enter` em todas as perguntas que aparecem.  
Após isso, instalamos o `gulp localmente`

```
npm install --save-dev gulp
```

Após isso, vamos até o arquivo `package.json` e acrescentamos o `gulp no script`

```
  "scripts": {
    "gulp": "gulp",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## Após isso criamos o arquivo `gulpfile.js` e adiconamos a pasta `node_modules` no `gitignore`

## Instalando o GULP-SASS

```
npm install --save-dev gulp-sass
```

## Instalando o SASS

```
npm install --save-dev sass
```

## Após instalar as dependencias vamos `importar` eles no arquivo `gulpfile.js`

```
const sass = require('gulp-sass')(require('sass')); // Importing gulp-sass
const gulp = require('gulp');  // Importing gulp
```

## Vamos criar a `function compilaSass()`

```
function compilaSass() {
  return gulp
    .src('./source/styles/main.scss') // Pega todos os arquivos *.scss dentro da pasta sass
    .pipe(
      sass({
        outputStyle: 'compressed', // Formato de saída do CSS (compactado)
      })
    )
    .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados na pasta css
}
```

### Após a `function` concluida precisamos criar o caminho dos arquivos, como as pastas `source` que deve conter a pasta `styles` e a pasta `build` que deve conter `styles`. Agora criaremos o primeiro arquivo de `source/styles` que sera o arquivo `main.scss`

Com as pastas e os arquivos criados, vamos adicionar valores aos arquivos `main.scss` e criaremos outro arquivo chamado de `variaveis.scss`

## Vamos exportar a tarefa da `function compilaSass`

Após exportado vamos rodar o projeto no terminal usando

```
npm run gulp "nome da function na exportação"
```

como observado aqui: `exports.compilaSass = compilaSass;`
usaremos:

```
npm run gulp compilaSass
```

resultado:

```
PS C:\Users\Franklin Lorran\OneDrive\Área de Trabalho\GULP-TASK> npm run gulp compilaSass

> gulp-task@1.0.0 gulp
> gulp compilaSass

[13:39:51] Using gulpfile ~\OneDrive\Área de Trabalho\GULP-TASK\gulpfile.js
[13:39:51] Starting 'compilaSass'...
[13:39:51] Finished 'compilaSass' after 86 ms
```

## Adicionando arquivo `index.html` na pasta `build` após criado iremos importar o arquivo `main.css` que tbm está na pasta `build` dentro de `styles`

## Instalação do

```
npm install --save-dev gulp-sourcemaps
```

### Após instalado iremos importar

```
const sass = require('gulp-sass')(require('sass')); // Importing gulp-sass
const gulp = require('gulp');  // Importing gulp
const sourceMaps = require('gulp-sourcemaps'); // Importando gulp-sourcemaps
```

### Após importado iremos adicionar na function compilaSass

```
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
```

### iremos rodar a function no terminal

```
npm run gulp compilaSass
```

Após isso a pasta `maps` será criada pela `function` na pasta ```styles``` dentro da ```build```

## Adicionando a exportação do watch que irá ficar rodando no nosso projeto e sempre que tiver algo novo não precisaremos vir ao terminal rodar nenhum comando.
```
exports.watch = function () {
  gulp.watch(
    './source/styles/*.scss',
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
}
```

Agora iremos ao terminal da inicio no watch
```
npm run gulp watch
```
