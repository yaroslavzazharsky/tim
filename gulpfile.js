
"use strict";

var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
	autoprefixer = require('gulp-autoprefixer'),
    cssbeautify = require('gulp-cssbeautify');



gulp.task("sass", function () {
	gulp.src("./sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions']
		}))
		.pipe(gulp.dest("./css"));
});


gulp.task("watch", function () {
	
	gulp.watch(["./sass/**/*.scss"], ["sass"]);

});

gulp.task('css', function() {
    return gulp.src('./styles/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./styles/'));;
});

gulp.task("default", ["sass", "watch", "css"]);

