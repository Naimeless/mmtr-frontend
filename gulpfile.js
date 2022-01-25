var gulp    = require('gulp'), // Подключаем Gulp
sass        = require('gulp-sass')(require('sass')),
browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function(){ // Создаем таск Sass
return gulp.src('app/sass/*.scss', {allowEmpty: true}) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('app/*.css'))  // Выгружаем результата в папку app/css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('scripts', function() {
	return gulp.src('app/js/*.js', {allowEmpty: true})
	.pipe(browserSync.reload({ stream: true }))
});
 
gulp.task('code', function() {
	return gulp.src('app/*.html', {allowEmpty: true})
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
    gulp.watch('app/sass/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами
    gulp.watch('app/js/*.js', gulp.parallel('scripts')); // Наблюдение за js файлами
    });

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'code', 'browser-sync', 'watch'));