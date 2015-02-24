var gulp = require("gulp"),
less = require("gulp-less"),
browserSync = require("browser-sync");


gulp.task("styles", function() {
    gulp.src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./css"));
});

gulp.task("browser-sync", function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default", ["styles", "browser-sync"], function(){
 
    gulp.watch("./less/*.less", ["styles", browserSync.reload]);

});
