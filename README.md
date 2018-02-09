# grunt-json-format

[![Build Status](https://img.shields.io/travis/jahed/grunt-json-format.svg)](https://travis-ci.org/jahed/grunt-json-format)
[![NPM Release](https://img.shields.io/npm/dt/grunt-json-format.svg)](https://www.npmjs.com/package/grunt-json-format)
[![Patreon](https://img.shields.io/badge/patreon-donate-f96854.svg)](https://www.patreon.com/jahed)

A Grunt Task for formatting JSON files.

## Getting Started

```sh
# Add the module to your project
npm install grunt-json-format --save-dev
```

```js
// Load the module in your Gruntfile
grunt.loadNpmTasks('grunt-json-format');
```

> Of course, you'll need to be using [Grunt](http://gruntjs.com/)

## Usage

```js
// Configure the task by providing a config.
'json-format': {
    test: {
        options: {
            indent: 4,
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
```

```sh
# Run the task
grunt json-format:test
```

## Options

### indent
Type: `String` or `Number`

Default: `null`

The indentation of the output.

Number indicates the number of whitespaces to use whereas a String will indicate
the character to use (for example `\t` will use tab characters).

By providing `null` or `0`, no indentation will be used and the output will
essentially be minified.

### remove
Type: `Array`

Default: `[]`

The keys to remove from the output.

This is useful for removing comment keys like `_comment`.

## Files

Check the [Grunt Documentation](http://gruntjs.com/configuring-tasks#files-array-format) on how to declare files and how Grunt parses them.

## License

See the [LICENSE](LICENSE) file.
