/*
 * grunt-yaml-key-value-create
 * https://github.com/nickspiel/grunt-yaml-key-value-create
 *
 * Copyright (c) 2015 Nick Spiel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('yaml_key_value_create', 'A plugin to create a simple key value pair yaml file from a list of filesgrunt', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: ': ',
      name: 'Config',
      variable: 'Array'
    });

    // Create initial structure
    var contents = options.name + ':' + grunt.util.linefeed,
        indent = '    ';

    // Add variable name
    contents += '  ' + options.variable + ':' + grunt.util.linefeed;

    // Iterate over all specified file groups
    this.files.forEach(function(f) {
      // Concat specified files
      var src = f.src.filter(function(folderpath) {
        // Warn on and remove invalid source files (if nonull was set)
        if (!grunt.file.isDir(folderpath)) {
          grunt.log.warn('Source file "' + folderpath + '" is not a directory.');
          return false;
        } else {
          return true;
        }
      }).map(function(folderpath) {
        return grunt.file.expand({cwd: folderpath}, '*')
          .map(function(file) {
            var fileName = file.replace(/\.[^/.]+$/, ""),
                // Remove spaces
                friendlyName = fileName.replace(/[-_]/, ' ');
                
            // Uppercase first letter of each word 
            friendlyName = friendlyName.replace(/[-_]/, ' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            return indent + fileName + ': ' + friendlyName;
          })
          .join(grunt.util.linefeed);
      }).join(grunt.util.linefeed);

      // Concatenate file names
      contents += src;

      // Write the destination file
      grunt.file.write(f.dest, contents);
      
      // Print a success message
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
