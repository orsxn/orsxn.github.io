var gulp = require('gulp');

/*

Top level Functions

gulp.task -c define task
gulp.src point to file to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for changes

*/

// Logs message
gulp.task('message', function(){

    return console.log('gulp is running');
});