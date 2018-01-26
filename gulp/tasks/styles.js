var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var simpleVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var imports = require('postcss-import');
var mixins = require("postcss-mixins");
var hexrbga = require('postcss-hexrgba');
var lost = require('lost');


gulp.task('styles' , function(){
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postcss([
				imports,
				mixins,
				simpleVars,
				nested,
				hexrbga,
				lost,
				autoprefixer

			]))
		.on("error" , function(errorInfo){
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest('./app/temp/styles'));


});
