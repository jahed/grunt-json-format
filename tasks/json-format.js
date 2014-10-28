//
// grunt-json-min
// https://github.com/jahed/grunt-json-min
//
// Copyright (c) 2014 Jahed Ahmed
// Licensed under the MIT license.
//

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('json-format', 'A Grunt Task for formatting JSON files.', function() {
        var options = this.options({
                indent: null,
                remove: []
            }),
            successCount = 0;

        function removeReplacer(key, value) {
            if(options.remove.indexOf(key) !== -1) {
                return undefined;
            }

            return value;
        }

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

                grunt.log.verbose.write('Formatting ' + filepath + ' to ' + f.dest + '...');

                grunt.file.write(f.dest, JSON.stringify(json, removeReplacer, options.indent));

                grunt.log.verbose.ok();
                successCount++;
            });
        });

        grunt.log.oklns(
            successCount + ' JSON ' + grunt.util.pluralize(successCount, 'file/files') + ' formatted.'
        );
    });

};
