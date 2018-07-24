const gulp           = require('gulp');
const browserSync    = require('browser-sync');
const path           = require('../path');

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'dev/'
		},
		files: [
			path.dev.root + '/*.html',
			path.dev.css + '/*.css',
			path.dev.img + '/**/*.*',
			path.dev.js + '/*.js',
			path.dev.libs + '/**/*.*'
		],
		notify: false,
		port: 3000,
		ui: {
			port: 3001,
		},
		open: false,
		// browser: ['chrome', /*'firefox', 'opera'*/],
		// tunnel: true,
		// tunnel: 'test', //Attempt to use the URL: http://test.localtunnel.me
	});
});