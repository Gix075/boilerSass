module.exports = function (grunt) {

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        params: grunt.file.readJSON('config.json'),
        
        'string-replace': {
            bootstrap: {
                files: {
                    '<%= params.files.sass %>': '<%= params.files.sass %>'
                },
                options: {
                    replacements: [
                        {
                            pattern: "// {{BOOTSTRAP}}",
                            replacement: "@include '<%= params.vendors.bootstrap.dest %><%= params.vendors.bootstrap.sass %>'"
                        }
                    ]
                }
            },
            fontawesome: {
                files: {
                    '<%= params.files.sass %>': '<%= params.files.sass %>'
                },
                options: {
                    replacements: [
                        {
                            pattern: "// {{FONTAWESOME}}",
                            replacement: "@include '<%= params.vendors.fontawesome.dest %><%= params.vendors.fontawesome.sass %>'"
                        }
                    ]
                }
            },
            normalize: {
                files: {
                    '<%= params.files.sass %>': '<%= params.files.sass %>'
                },
                options: {
                    replacements: [
                        {
                            pattern: "// {{NORMALIZE}}",
                            replacement: "@include '<%= params.vendors.normalize.dest %><%= params.vendors.normalize.sass %>'"
                        }
                    ]
                }
            }
        },
        
        copy: {
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= params.vendors.bootstrap.src %>',
                        src: ['**'],
                        dest: '<%= params.vendors.bootstrap.dest %>'
                    }
                ]
            },
            fontawesome: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= params.vendors.fontawesome.src %>',
                        src: ['**'],
                        dest: '<%= params.vendors.fontawesome.dest %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= params.vendors.fontawesome.fonts %>',
                        src: ['**'],
                        dest: 'fonts/'
                    }
                ]
            }
        },
        
        sass: {  
            dist: { 
                options: { 
                    style: 'expanded'
                },
                files: { 
                    '<%= params.files.css %>': '<%= params.files.sass %>'
                }
            }
        },
        watch: {
            files: ['sass/**/*.scss'],
            tasks: ['sass_compile']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Developing Tasks
    grunt.registerTask('sass_compile', ['sass']);
    grunt.registerTask('default', ['sass','watch']);
    grunt.registerTask('dev', ['sass','watch']);
    
    
    // Install Tasks
    grunt.registerTask('install', function() {
        
        params = grunt.file.readJSON('config.json');
        
        if(!params) {
            grunt.fatal('ERROR: Install needs config.json file');
        } else {
            
            // Bootstrap
            if (params.install.bootstrap === true) {
                grunt.task.run([
                    'copy:bootstrap',
                    'string-replace:bootstrap'
                ]);
            }  
            
            // FontAwesome
            if (params.install.fontawesome === true) {
                grunt.task.run([
                    'copy:fontawesome',
                    'string-replace:fontawesome'
                ]);
            }
            
            // Normalize
            if (params.install.normalize === true) {
                grunt.task.run([
                    'string-replace:normalize'
                ]);
            }
            
        }
        
        
    });

};