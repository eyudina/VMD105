const { series, parallel, src, dest, watch } = require('gulp');
const pug  = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

function html() {
    return src(['./pug/*.pug', '!./pug/_*.pug'])
        .pipe(pug({ pretty: true }))
        .pipe(dest('./'));
}

function css() {
    return src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./css'));
}

exports.default = parallel(css, html);
exports.watch = function() {
    watch('./sass/*.scss', {IgnoreInitial: false}, css);
    watch('./pug/*.pug', {IgnoreInitial: false}, html);
}
