'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.yaml_key_value_create = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  single_folder: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/single_folder.yml');
    var expected = grunt.file.read('test/expected/single_folder.yml');
    test.equal(actual, expected, 'Expected files are not present in.');

    test.done();
  },
  multiple_folders: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiple_folders.yml');
    var expected = grunt.file.read('test/expected/multiple_folders.yml');
    test.equal(actual, expected, 'Expected files are not present.');

    test.done();
  },
};
