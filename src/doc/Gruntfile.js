module.exports = function (grunt) {

    grunt.initConfig({
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'documentation.css': 'sass/documentation.scss'
                }
            }
        },
        watch: {
            files: ['sass/**/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bulldoc');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass','watch']);

};