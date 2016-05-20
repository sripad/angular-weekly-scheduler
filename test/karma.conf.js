module.exports = function (config) {
  config.set({

    basePath: '../',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/moment/moment.js',
      'app/demo/*.js',
      'dist/js/*.js',
      'test/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: [
      'PhantomJS'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
