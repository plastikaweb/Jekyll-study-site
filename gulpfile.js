var gulp = require('gulp'),
    shell = require('gulp-shell'),
    browserSync = require('browser-sync').create();

gulp.task('build', shell.task(['bundle exec jekyll serve']));

gulp.task('serve', function () {
    browserSync.init(
        {
            server: {baseDir: '_site/'}
        }
    );

    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);