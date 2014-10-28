//
// grunt-json-min
// https://github.com/jahed/grunt-json-min
//
// Copyright (c) 2014 Jahed Ahmed
// Licensed under the MIT license.
//

'use strict';

module.exports = function(grunt) {

    grunt.config.init({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        'json-format': {
            test: {
                options: {
                    space: 4,
                    remove: ['_comment']
                },
                files: [
                    {
                        expand: true,
                        cwd: './test',
                        src:  ['./json/test-1-*.json'],
                        dest: './build/'
                    },
                    {
                        expand: true,
                        cwd: './test',
                        src:  ['./json/test-2-*.json'],
                        dest: './build/'
                    }
                ]
            }
        }
    });

    grunt.task.loadTasks('tasks');

    grunt.task.loadNpmTasks('grunt-contrib-jshint');

    grunt.task.registerTask('test', ['json-format']);
    grunt.task.registerTask('default', ['jshint', 'test']);

};
