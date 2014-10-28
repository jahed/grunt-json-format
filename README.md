# grunt-json-min

> A Grunt Task for minifying JSON files.

## Getting Started

```sh
# Add the module to your project
npm install grunt-json-min --save-dev
```

```js
// Load the module in your Gruntfile
grunt.loadNpmTasks('grunt-json-min');
```

> Of course, you'll need to be using [Grunt](http://gruntjs.com/)

## Usage

```js
// Configure the task by providing schemas with JSON files to validate
grunt.config.init({
    // ...
    'json-min': {
        your_target: {
            files: {
                'dest/**/*.json': ['json/*.json']
            }
        }
    }
    // ...
});
```

```sh
# Run the task
grunt json-lint
```

## License

Copyright (c) 2014 Jahed Ahmed

Licensed under the [MIT license](LICENSE-MIT).
