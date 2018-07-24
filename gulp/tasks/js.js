const gulp           = require('gulp');
const concat         = require('gulp-concat');
const uglify         = require('gulp-uglify');
const rename         = require('gulp-rename');
const rigger         = require('gulp-rigger');
const path           = require('../path');


gulp.task('js', function() {
	return gulp.src(path.dev.js + '/custom.js')
	.pipe(rigger())
	.pipe(rename('main.js'))
	.pipe(gulp.dest(path.dev.js))
	// .pipe(rename({
	// 		prefix : '',
	// 		basename: 'main',
	// 		suffix: '.min',
	// 		extname: '.js'
	// 	}))
	// .pipe(uglify())
	// .pipe(gulp.dest(path.dev.js));
});

gulp.task('js:watch', function() {
	gulp.watch([path.dev.libs + '/**/*.js', path.dev.js + '/custom.js'], ['js']);
});