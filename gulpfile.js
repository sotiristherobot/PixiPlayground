/**
 * Created by sotiris on 10/9/16.
 */
'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');


gulp.task('browser-sync', function () {

    browserSync({
        server : {}

    });

});


gulp.task('html', function () {
   gulp.src('./*.html')
       .pipe(gulp.dest('./dist/'))
       .pipe(browserSync.reload({stream:true}));
});


gulp.task('js', function () {
    gulp.src('./scripts/*.js')
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(browserSync.reload({stream:true}));

});


gulp.task('watch', function () {

    gulp.watch('./*.html',['html']);
    gulp.watch('./scripts/*.js',['js']);

    // gulp.watch([
    //     './*.html',
    //     './scripts/*.js'
    // ]).on('change', reload);


});

gulp.task('default', ['browser-sync', 'watch']);