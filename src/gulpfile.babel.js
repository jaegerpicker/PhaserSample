/**
 * Created by scampbell on 2/14/16.
 */
import gulp from "gulp";
import sourceMaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import path from "path";

const paths = {
    es6: ['./**/*.js', '!./node_modules/**', '!./public/node_modules/**', '!./public/bower_components/**'],
    es5: './dist',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'src')
};
gulp.task('babel', () => {
    return gulp.src(paths.es6)
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourceMaps.write('.', { sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest(paths.es5));
});
gulp.task('watch', ['babel'], () => {
    gulp.watch(paths.es6, ['babel']);
});

gulp.task('default', ['watch']);