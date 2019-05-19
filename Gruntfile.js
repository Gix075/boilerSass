module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist/']
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: 'sass/**',
                        dest: 'dist/boilerSASS_<%= pkg.version %>/'  
                    },
                    {
                        src: 'src/index.html',
                        dest: 'dist/boilerSASS_<%= pkg.version %>/index.html'  
                    },
                    {
                        src: 'src/demo.html',
                        dest: 'dist/boilerSASS_<%= pkg.version %>/demo.html'  
                    },
                    {
                        src: 'src/grunt/package.json',
                        dest: 'dist/boilerSASS_<%= pkg.version %>/package.json'  
                    },
                    {
                        src: 'src/grunt/Gruntfile.js',
                        dest: 'dist/boilerSASS_<%= pkg.version %>/Gruntfile.js'  
                    }
                ]
            }
        },
        sass: {
            dev: {
                files: {
                    'src/css/boilerSass.css': 'src/sass/boilerSass.scss'
                }
            },
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/boilerSASS_<%= pkg.version %>/css/boilerSass.css': 'src/sass/boilerSass.scss'
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
            },
            dev: {
                files: {
                    'dist/boilerSASS_<%= pkg.version %>/css/boilerSass.css': 'dist/boilerSASS_<%= pkg.version %>/css/boilerSass.css'
                }
            }
        },
        watch: {
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['sass:dev', 'postcss']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:dev','postcss:dev','watch']);
    grunt.registerTask('dist', ['clean:dist','sass:dist','postcss:dist','copy']);
}