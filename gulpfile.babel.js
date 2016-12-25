import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack-stream';
import * as webpackConfig from './webpack.config.js';

const config= {
    dirs: {
        src: path.join(__dirname, 'src', 'main'),
        dest: path.join(__dirname, 'dist'),
    },
};

gulp.task('build:static', () => {
    gulp.src(path.join(config.dirs.src, 'static', '**', '*'))
        .pipe(gulp.dest(path.join(config.dirs.dest)));
});
gulp.task('build:vendor', () => {
    gulp.src(path.join('node_modules', 'sanitize.css', 'sanitize.css'))
        .pipe(gulp.dest(path.join(config.dirs.dest, 'vendor', 'css')));
    gulp.src(path.join('node_modules', 'jquery', 'dist', 'jquery.js'))
        .pipe(gulp.dest(path.join(config.dirs.dest, 'vendor', 'js')));
    gulp.src(path.join('node_modules', 'bootstrap', 'dist', '**', '*'))
        .pipe(gulp.dest(path.join(config.dirs.dest, 'vendor')));
});
gulp.task('build:js', () => {
    gulp.src(path.join(config.dirs.src, 'js', '**', '*'))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.join(config.dirs.dest, 'assets', 'js')));
});
gulp.task('build', ['build:vendor', 'build:static', 'build:js']);

gulp.task('watch', ['build'], () => {
    gulp.watch(path.join(config.dirs.src, 'static', '**', '*'), ['build:static']);
});

gulp.task('default', ['build']);
