/* jshint node: true */

// cowardly copied (with modifications) from https://github.com/google/web-starter-kit/blob/master/gulpfile.js
/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var del = require('del');
var sync = require('browser-sync');
var reload = sync.reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('clean', del.bind(null, ['dist', 'tmp/*']));

gulp.task('jshint', function () {
  return gulp
  .src([
    'app/**/*.js',
    '!app/vendor/**/*'
  ])
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
  return gulp
  .src('app/**/*.scss')
  .pipe($.ignore('app/vendor'))
  .pipe($.sourcemaps.init())
  .pipe($.sass())
  .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest('tmp'));
});

gulp.task('vendor', function () {
  return gulp
  .src('app/vendor/**/*')
  .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp
  .src('app/images/**/*')
  .pipe(gulp.dest('dist/images'));
});

gulp.task('dist', ['jshint', 'sass', 'images', 'vendor'], function () {
  var assets = $.useref.assets({searchPath: 'app'});

  return gulp
  .src([
    'app/index.html',
    'app/**/*.html',
    'tmp/**/*.css',
    'app/*.txt'
  ])
  .pipe(assets)
  .pipe($.ignore('app/vendor'))
  .pipe($.if('*.js', $.uglify()))
  .pipe($.if('*.css', $.csso()))
  .pipe(assets.restore())
  .pipe($.useref())
  .pipe($.if('*.html', $.minifyHtml()))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist']);

gulp.task('start', ['default'], function () {
  sync({
    notify: false,
    logPrefix: 'CHURRAS',
    server: 'dist'
  });

  gulp.watch(['app/**/*'], ['default', reload]);
});
