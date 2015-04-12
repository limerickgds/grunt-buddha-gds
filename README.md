# grunt-buddha-gds

> buddha\'s grace illminates code as sunshine

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-gds --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-gds');
```

## The "buddha_gds" task

### Overview
In your project's Gruntfile, add a section named `buddha_gds` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha_gds: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

### options.who
Type:`String`
Default value: `buddha`

选择佛祖或者神兽字符画

A string value that is used to do something with whatever.

#### options.commentSymbol
Type: `String`
Default value: `//`

文件中拼接佛祖或神兽时使用的注释符


### Usage Examples



```js
grunt.initConfig({
  buddha_gds: {
    options: {
      ’who‘:'buddha',
      'commentSymbol':'//'
    },
    dist: ['example/*.js']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-04-12 &nbsp; &nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp; init

## License
Copyright (c) 2015 limerick. Licensed under the MIT license.
