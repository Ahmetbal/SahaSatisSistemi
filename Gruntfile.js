// AdminLTE Gruntfile
module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    watch: {
      // If any .less file changes in directory "build/less/" run the "less"-task.
      files: ["assets/build/less/*.less", "build/less/skins/*.less", "assets/js/app.js"],
      tasks: ["less", "uglify"]
    },
    // "less"-task configuration
    // This task will compile all less files upon saving to create both AdminLTE.css and AdminLTE.min.css
    less: {
      // Development not compressed
      development: {
        options: {
          // Whether to compress or not
          compress: false
        },
        files: {
          // compilation.css  :  source.less
          "dist/css/AdminLTE.css": "assets/build/less/AdminLTE.less",
          //Non minified skin files
          "assets/css/skins/skin-blue.css": "assets/build/less/skins/skin-blue.less",
          "assets/css/skins/skin-black.css": "assets/build/less/skins/skin-black.less",
          "assets/css/skins/skin-yellow.css": "assets/build/less/skins/skin-yellow.less",
          "assets/css/skins/skin-green.css": "assets/build/less/skins/skin-green.less",
          "assets/css/skins/skin-red.css": "assets/build/less/skins/skin-red.less",
          "assets/css/skins/skin-purple.css": "assets/build/less/skins/skin-purple.less",
          "assets/css/skins/skin-blue-light.css": "assets/build/less/skins/skin-blue-light.less",
          "assets/css/skins/skin-black-light.css": "assets/build/less/skins/skin-black-light.less",
          "assets/css/skins/skin-yellow-light.css": "assets/build/less/skins/skin-yellow-light.less",
          "assets/css/skins/skin-green-light.css": "assets/build/less/skins/skin-green-light.less",
          "assets/css/skins/skin-red-light.css": "assets/build/less/skins/skin-red-light.less",
          "assets/css/skins/skin-purple-light.css": "assets/build/less/skins/skin-purple-light.less",
          "assets/css/skins/_all-skins.css": "assets/build/less/skins/_all-skins.less"
        }
      },
      // Production compresses version
      production: {
        options: {
          // Whether to compress or not
          compress: true
        },
        files: {
          // compilation.css  :  source.less
          "assets/css/AdminLTE.min.css": "build/less/AdminLTE.less",
          // Skins minified
          "assets/css/skins/skin-blue.min.css": "build/less/skins/skin-blue.less",
          "assets/css/skins/skin-black.min.css": "build/less/skins/skin-black.less",
          "assets/css/skins/skin-yellow.min.css": "build/less/skins/skin-yellow.less",
          "assets/css/skins/skin-green.min.css": "build/less/skins/skin-green.less",
          "assets/css/skins/skin-red.min.css": "build/less/skins/skin-red.less",
          "assets/css/skins/skin-purple.min.css": "build/less/skins/skin-purple.less",
          "assets/css/skins/skin-blue-light.min.css": "build/less/skins/skin-blue-light.less",
          "assets/css/skins/skin-black-light.min.css": "build/less/skins/skin-black-light.less",
          "assets/css/skins/skin-yellow-light.min.css": "build/less/skins/skin-yellow-light.less",
          "assets/css/skins/skin-green-light.min.css": "build/less/skins/skin-green-light.less",
          "assets/css/skins/skin-red-light.min.css": "build/less/skins/skin-red-light.less",
          "assets/css/skins/skin-purple-light.min.css": "build/less/skins/skin-purple-light.less",
          "assets/css/skins/_all-skins.min.css": "build/less/skins/_all-skins.less"
        }
      }
    },
    // Uglify task info. Compress the js files.
    uglify: {
      options: {
        mangle: true,
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'assets/js/app.min.js': ['assets/js/app.js']
        }
      }
    },
    // Build the documentation files
    includes: {
      build: {
        src: ['*.html'], // Source files
        dest: 'documentation/', // Destination directory
        flatten: true,
        cwd: 'documentation/build',
        options: {
          silent: true,
          includePath: 'documentation/build/include'
        }
      }
    },

    // Optimize images
    image: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'build/img/',
          src: ['**/*.{png,jpg,gif,svg,jpeg}'],
          dest: 'assets/img/'
        }]
      }
    },

    // Validate JS code
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      core: {
        src: 'assets/js/app.js'
      },
      demo: {
        src: 'assets/js/demo.js'
      },
      pages: {
        src: 'assets/js/pages/*.js'
      }
    },

    // Validate CSS files
    csslint: {
      options: {
        csslintrc: 'assets/build/less/.csslintrc'
      },
      dist: [
        'assets/css/AdminLTE.css',
      ]
    },

    // Validate Bootstrap HTML
    bootlint: {
      options: {
        relaxerror: ['W005']
      },
      files: ['pages/**/*.html', '*.html']
    },

    // Delete images in build directory
    // After compressing the images in the build/img dir, there is no need
    // for them
    clean: {
      build: ["assets/build/img/*"]
    }
  });

  // Load all grunt tasks

  // LESS Compiler
  grunt.loadNpmTasks('grunt-contrib-less');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Include Files Within HTML
  grunt.loadNpmTasks('grunt-includes');
  // Optimize images
  grunt.loadNpmTasks('grunt-image');
  // Validate JS code
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Delete not needed files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Lint CSS
  grunt.loadNpmTasks('grunt-contrib-csslint');
  // Lint Bootstrap
  grunt.loadNpmTasks('grunt-bootlint');

  // Linting task
  grunt.registerTask('lint', ['jshint', 'csslint', 'bootlint']);

  // The default task (running "grunt" in console) is "watch"
  grunt.registerTask('default', ['watch']);
};
