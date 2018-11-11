/* eslint-env node */
'use strict';

var
	gulp   = require('gulp'),
	path   = require('path'),
	del    = require('del'),
	eslint = require('gulp-eslint'),
	mocha  = require('gulp-mocha'),
	umd    = require('gulp-umd'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

var
	src  = 'src/class.js',
	test = 'test/test.js',
	dist = 'dist';

function clean() {
	return del(dist);
}

function lint() {
	return gulp.src(src)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
}

function copy() {
	return gulp.src(src)
		.pipe(gulp.dest(dist));
}

function modularize() {
	return gulp.src(src)
		.pipe(umd())
		.pipe(rename({ suffix: '.umd' }))
		.pipe(gulp.dest(dist));
}

function unitTest() {
	return gulp.src(test)
		.pipe(mocha({ reporter: 'spec' }));
}

function minify() {
	return gulp.src(path.join(dist, '*.js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(dist));
}

gulp.task('default', gulp.series(clean, lint, copy, modularize, unitTest, minify));