var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var del = require('del');
var useMin = require('gulp-usemin');
var cssNano = require('gulp-cssnano');
var rev = require('gulp-rev');
var uglyfy = require('gulp-uglify');
var browserSync = require('browser-sync').create();


gulp.task('previewDist' , function(){
		browserSync.init({
		server:{
			baseDir : "docs"
		}
	});

});


gulp.task('deleteDistFolder', function(){
	return del('./docs')
});

// gulp.task('copyGeneralFiles',['deleteDistFolder'],function(){
// 	var pathsToCopy = [
// 					'./app/**/*',
// 					'!./app/index.html',
// 					'!./app/assets/images/**',
// 					'!./app/assets/styles/**',
// 					'!./app/assets/scripts/**',
// 					'!./app/temp',
// 					'!./app/temp/**'


// 	]
// 	return gulp.src(pathsToCopy)
// 				.pipe(gulp.docs('./dist'));
// });


gulp.task('optimizeImages',['deleteDistFolder'] , function(){
	return gulp.src([
			'./app/assets/images/**/*', 
			'!./app/assets/images/icons',
			'./app/assets/images/icons/**/*'
		])

			.pipe(imageMin({
				progressive: true,
				interlaced: true,
				multipass: true
			}))
			.pipe(gulp.dest('docs/assets/images'));
		});
		
gulp.task('useminTrigger',['deleteDistFolder'], function(){
				gulp.start('useMin');
		})


gulp.task('useMin',[ 'styles' , 'scripts'] , function(){
	return gulp.src('./app/index.html')
				.pipe(useMin({
					css: [function(){return rev()}, function(){return cssNano()}],
					js: [function(){return rev()}, function(){return uglyfy()}]
				}))
				.pipe(gulp.dest('./docs'));
});

gulp.task('build',['deleteDistFolder', /*'copyGeneralFiles',*/'optimizeImages','useminTrigger']);