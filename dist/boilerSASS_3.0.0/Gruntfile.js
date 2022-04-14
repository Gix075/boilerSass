module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: {
                    'css/boilerSass.css': 'sass/boilerSass.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')(), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dev: {
                files: {
                    'css/boilerSass.css': 'css/boilerSass.css'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass:dev', 'postcss:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:dev','postcss:dev','watch']);
    grunt.registerTask('dist', ['sass:dist','postcss:dist','copy']);
}