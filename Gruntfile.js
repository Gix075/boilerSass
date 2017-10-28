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
                            replacement: "@import '<%= params.vendors.bootstrap.sass %>';"
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
                            replacement: "@import '<%= params.vendors.fontawesome.sass %>';"
                        }
                    ]
                }
            },
            materialicons: {
                files: {
                    '<%= params.files.sass %>': '<%= params.files.sass %>'
                },
                options: {
                    replacements: [
                        {
                            pattern: "// {{MATERIALICONS}}",
                            replacement: "@import '<%= params.vendors.materialicons.sass %>';"
                        }
                    ]
                }
            },
            eleganticons: {
                files: {
                    '<%= params.files.sass %>': '<%= params.files.sass %>'
                },
                options: {
                    replacements: [
                        {
                            pattern: "// {{ELEGANTICONS}}",
                            replacement: "@import '<%= params.vendors.eleganticons.sass %>';"
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
                            replacement: "@include '<%= params.vendors.normalize.sass %>';"
                        }
                    ]
                }
            }
        },
        
        copy: {
            
            install: {
                
            },
            
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= params.vendors.bootstrap.src %>',
                        src: ['**'],
                        dest: '<%= params.vendors.bootstrap.dest %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= params.vendors.bootstrap.js.src %>',
                        src: ['**'],
                        dest: '<%= params.vendors.bootstrap.js.dest %>'
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
            },
            materialicons: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= params.vendors.materialicons.fonts %>',
                        src: ['**'],
                        dest: 'fonts/'
                    }
                ]
            },
            eleganticons: {
                files: [
                    {
                        src: '<%= params.vendors.eleganticons.src %>',
                        dest: '<%= params.vendors.eleganticons.dest %><%= params.vendors.eleganticons.sass %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= params.vendors.eleganticons.fonts %>',
                        src: ['**'],
                        dest: 'fonts/'
                    }
                ]
            }
        },
        
        processhtml: {
            options: {},
            bootstrap: {
                files: {
                    'index.html': ['index.html']
                } 
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
                    'string-replace:bootstrap',
                    'processhtml:bootstrap'
                ]);
            }  
            
            // FontAwesome
            if (params.install.fontawesome === true) {
                grunt.task.run([
                    'copy:fontawesome',
                    'string-replace:fontawesome'
                ]);
            }
            
            // Material Design Icons
            if (params.install.materialicons === true) {
                grunt.task.run([
                    'copy:materialicons',
                    'string-replace:materialicons'
                ]);
            }
            
            // Elegant Icons
            if (params.install.eleganticons === true) {
                grunt.task.run([
                    'copy:eleganticons',
                    'string-replace:eleganticons'
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