/*
 * Created on Tue October 14 2021
 *
 * @author J Gibbens <j.gibbens@alight.com>
 */

const { watch, src, dest, series, gulp } = require('gulp');
const connect = require('gulp-connect');
const replace = require('gulp-replace');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer'); // auto set up prefixes for browsers
const plumber = require('gulp-plumber'); // error catching
const cleanCSS = require('gulp-clean-css');
const stripCssComments = require('gulp-strip-css-comments');
const pixelstorem = require('postcss-pixels-to-rem');
const rename = require('gulp-rename');

const fs = require('fs');

const options = {
    baseName: 'griffin', // in case we want to add differnet names - currently the CSS will be named the same as the root SCSS file
    base: './src/',
};

function startServer() {
    connect.server({
        port: 8888, // the webserver port
        root: './', // root of this project
        livereload: true // reloads on save
    });
}



/* Build the CSS file */
function CSS() {
    return src(options.base + 'SASS/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(plumber()) // error handling
        .pipe(postcss([autoprefixer(), pixelstorem()])) // auto add prefixes (ie: -moz)
        .pipe(cleanCSS({ format: 'keep-breaks' })) //use node.js cleancss to fix this up
        .pipe(stripCssComments()) // remove all comments - removes commented code, too
        .pipe(dest(options.base + 'css'))
        .pipe(connect.reload());
}


watch(options.base + 'SASS/**/*.scss', { base: options.base }, series(CSS)); // the ever watchful eye

exports.default = series(startServer);