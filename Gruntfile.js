/*
 * grunt-yaml-key-value-create
 * https://github.com/nickspiel/grunt-yaml-key-value-create
 *
 * Copyright (c) 2015 Nick Spiel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    yaml_key_value_create: {
      single_file_test: {
        options: {
          name: 'Test'
        },
        files: {
          'tmp/single_folder.yml': ['test/fixtures']
        }
      },
      multi_file_test: {
        options: {
          name: 'Test'
        },
        files: {
          'tmp/multiple_folders.yml': ['test/fixtures', 'test/fixtures_2']
        }
      },
      icons: {
        options: {
          name: 'Icons'
        },
        files: {
          'tmp/Global.yml': ['test/fixtures']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'yaml_key_value_create', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
