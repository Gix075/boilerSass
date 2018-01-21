module.exports = function (grunt) {

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        
        
        copy: {
            
            html5boilerplate: {
                files: [
                    {
                        src: '<%= pkg.src %>/html5-boilerplate/404.html',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/404.html'
                    },
                    {
                        src: '<%= pkg.src %>/html5-boilerplate/browserconfig.xml',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/browserconfig.xml'
                    },
                    {
                        src: '<%= pkg.src %>/html5-boilerplate/humans.txt',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/humans.txt'
                    },
                    {
                        src: '<%= pkg.src %>/html5-boilerplate/robots.txt',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/robots.txt'
                    },
                    {
                        src: '<%= pkg.src %>/html5-boilerplate/site.webmanifest',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/site.webmanifest'
                    },
                    {
                        expand: true,
                        cwd: '<%= pkg.src %>/html5-boilerplate/js',
                        src: ['**'],
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/js/'
                    }
                ]
            },
            boilersass: {
                files: [
                    {
                        src: '<%= pkg.src %>/tile-wide.png',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/tile-wide.png'
                    },
                    {
                        src: '<%= pkg.src %>/tile.png',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/tile.png'
                    },
                    {
                        src: '<%= pkg.src %>/favicon.ico',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/favicon.ico'
                    },
                    {
                        src: '<%= pkg.src %>/icon.png',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/icon.png'
                    },
                    {
                        expand: true,
                        cwd: '<%= pkg.src %>/css',
                        src: ['**'],
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/css/'
                    },
                    {
                        expand: true,
                        cwd: '<%= pkg.src %>/sass',
                        src: ['**'],
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/sass/'
                    },
                    {
                        src: '<%= pkg.src %>/doc/index.html',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/doc/index.html'
                    },
                    {
                        src: '<%= pkg.src %>/doc/documentation.html',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/doc/documentation.html'
                    },
                    {
                        src: '<%= pkg.src %>/doc/documentation.css',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/doc/documentation.css'
                    },
                    {
                        src: '<%= pkg.src %>/index.html',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/index.html'
                    },
                    {
                        src: '<%= pkg.src %>/Gruntfile.js',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/Gruntfile.js'
                    },
                    {
                        src: '<%= pkg.src %>/package.json',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/package.json'
                    },
                    {
                        src: '<%= pkg.src %>/config.json',
                        dest: '<%= pkg.dist %>/boilerSass_<%= pkg.version %>/config.json'
                    }
                ]
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-processhtml');
    
    // Developing Tasks
    grunt.registerTask('default', ['message']);
    grunt.registerTask('dist', ['copy']);
    
    
    // Install Tasks
    grunt.registerTask('message', function() {
        grunt.fatal('only DIST task is available!');
    });

};