# grunt-yaml-key-value-create

> A plugin to create yaml file from a list of files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-yaml-key-value-create --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-yaml-key-value-create');
```

## The "yaml_create" task

### Overview
In your project's Gruntfile, add a section named `yaml_create` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  yaml_create: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.name
Type: `String`
Default value: `Config'`

A string value used to create the yaml array name.

### Usage Examples

#### Default Options
In this example, we are creating a `Example.yml` file with a key value pair array of the files conatained in the `files` directory. So if the `files` directory has a file-1.html, file-2.html and file-3.html, the generated result would be:

```yml
ExampleArray:
  Array:
    file-1: File 1
    file-2: File 2
    file-3: File 3
```

```js
grunt.initConfig({
  example: {
    options: {
      name: 'ExampleArray',
      variable: 'Array'
    },
    files: {
      'Example.yml': ['files']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

**0.1.1** *3 / 12 / 2015*  - Updated readme

**0.1.2** *3 / 12 / 2015*  - Updated package name

**0.2.0** *3 / 12 / 2015*  - Updated structure
