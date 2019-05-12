module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/css/boilerSass.css': 'src/sass/boilerSass.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                files: {
                    'src/css/boilerSass.css': 'src/css/boilerSass.css'
                }
            }
        },
        watch: {
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['sass', 'postcss']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','postcss','watch']);
}