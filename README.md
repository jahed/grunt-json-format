# grunt-json-format

> A Grunt Task for formatting JSON files.

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
grunt json-format
```

## Options

### indent
Type: `String` or `Number`
Default: `null`

The indentation of the output.

Number indicated the number of whitespaces to use whereas a String will indicate
the character to use (for example `\t` will use tab characters).

### remove
Type: `Array`
Default: `[]`

The keys to remove from the output.

This is useful for removing comment keys like `_comment`.

## License

Copyright (c) 2014 Jahed Ahmed

Licensed under the [MIT license](LICENSE-MIT).
