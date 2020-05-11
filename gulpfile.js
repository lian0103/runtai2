var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var del = require('del');
var reload = browserSync.reload;

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task("webpack", function (callback) {
    // run webpack
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss') 
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError)) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('imagesMin', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images'));
});


gulp.task('serve',function(){
    browserSync.init({
        server: {
            //根目錄
            baseDir: "./",
            index: "index.html"
        }
    });

    gulp.watch(["src/sass/*.scss","src/sass/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("src/css/*.css").on('change', reload);
    gulp.watch("src/*.js").on('change', function(){
        webpack(webpackConfig, function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
        });
        reload();
    });
    gulp.watch("src/images/*").on('change', reload);

});


gulp.task('default', ["webpack",'sass','imagesMin','serve']);