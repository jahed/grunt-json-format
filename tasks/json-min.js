//
// grunt-json-min
// https://github.com/jahed/grunt-json-min
//
// Copyright (c) 2014 Jahed Ahmed
// Licensed under the MIT license.
//

'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('json-min', 'A Grunt Task for minifying JSON files.', function() {
        var options = this.options({}),
            successCount = 0;

        this.files.forEach(function(f) {
            f.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.fail.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                return true;
            }).forEach(function(filepath) {
                var json;

                try {
                    json = grunt.file.readJSON(filepath);
                } catch(e) {
                    grunt.fail.warn(e);
                    return;
                }

                grunt.log.verbose.write('Minifying ' + filepath + ' to ' + f.dest + '...');

                grunt.file.write(f.dest, JSON.stringify(json));

                grunt.log.verbose.ok();
                successCount++;
            });
        });

        grunt.log.oklns(
            successCount + ' JSON ' + grunt.util.pluralize(successCount, 'file/files') + ' minified.'
        );
    });

};
