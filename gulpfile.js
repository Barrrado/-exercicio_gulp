const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const mini = require('gulp-imagemin'); 
const cssnano = require('gulp-cssnano');



function styles() {
    return gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
       outputStyle:'compressed',
        }).on('error', sass.logError))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('src/css'))
    }

function minify(){
    return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))     
}
function images(){
    return gulp.src('assets/images/*')
    .pipe(mini())
    .pipe(gulp.dest('src/img'))
    }
function css(){
    return gulp.src('src/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('src/css'))   
}
    exports.watch = function(){
        gulp.watch('src/scss/*.scss', {ignoreInitial:false},gulp.series(styles));
        gulp.watch('assets/js/*.js',{ignoreInitial: false},gulp.series(minify));
        gulp.watch('assets/images/*', {ignoreInitial: false}, gulp.series(images));
       
    }