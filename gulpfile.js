//gulpfile.js

const gulp = require('gulp');
const { series } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const jsdoc = require('gulp-jsdoc3');
var order = require('gulp-order');

const html = () => {
   return gulp.src('./src/index.html')
      .pipe(gulp.dest('dist'));
};

const css = () => {
   return gulp.src('./src/css/style.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist'));
};

const js = () => {
   return gulp.src('./src/js/*.js')
       .pipe(order(['Dilemma.js', 'Dilemmamanager.js', 'Game.js']))
       .pipe(concat('app.js'))
       .pipe(gulp.dest('dist'));
};

const json = () => {
   return gulp.src('./src/json/dilemmas.json')
      .pipe(gulp.dest('dist'));
};

const docs = () => {
   return gulp.src(['README.md', './src/**/*.js'], { read: false })
      .pipe(jsdoc());
};

gulp.task('watch', function () {
   browserSync.init({
      server: "./dist/"
   });

   gulp.watch("./src/**/*.*", series(html,css,js,json,docs));
   gulp.watch("./dist/**/*.*").on('change', browserSync.reload);
});

gulp.task('build', async function () {
   html();
   css();
   json();
   js();
})
/* TODO door student, opgave 1a */