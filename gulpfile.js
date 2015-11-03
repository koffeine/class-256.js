'use strict';

var gulp   = require('gulp'),
	path   = require('path'),
	del    = require('del'),
	eslint = require('gulp-eslint'),
	umd    = require('gulp-umd'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

var src  = 'src/class.js',
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

function minify() {
	return gulp.src(path.join(dist, '*.js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(dist));
}

gulp.task('clean', clean);
gulp.task('build', gulp.series(lint, copy, modularize, minify));