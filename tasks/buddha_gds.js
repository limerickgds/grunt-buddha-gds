/*
 * grunt-buddha-gds
 * 
 *
 * Copyright (c) 2015 limerick
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha_gds', 'buddha\'s grace illminates code as sunshine', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'buddha',              //替换默认项目 buddha and alpaca 最终起作用还是gruntfile
      commentSymbol: '//'
    });
    var testExistRegexMap = {
      'buddha' : /o8888888o/,
      'alpaca' : /┗┓┓┏━┳┓┏┛/ 
    };
    var who = options.who,
        commentSymbol = options.commentSymbol,
        commentFilePathMap = {
          'buddha': 'assets/buddha.txt',
          'alpaca': 'assets/alpaca.txt'
        },
        commentFilePath = path.join(__dirname,commentFilePathMap[who]),   //__dirname是node的全局变量表示当前代码运行的目录
        commentContent = grunt.file.read(commentFilePath),
        lineCommentArr = commentContent.split(grunt.util.normalizelf('\n')) ;//util.normalizelf对换行符进行转义
    lineCommentArr.forEach(function(value,index,array){          //添加 注释符号
      array[index] = commentSymbol + value;
    });
    commentContent = lineCommentArr.join(grunt.util.normalizelf('\n'));
    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {

        // Read file source.
        var originalFileContent = grunt.file.read(filepath),
            newcontent = commentContent +
                         grunt.util.normalizelf('\n') +
                         originalFileContent;
        if(testExistRegexMap[who].test(originalFileContent)){
          return;
        }
        grunt.file.write(filepath,newcontent);
      });

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
