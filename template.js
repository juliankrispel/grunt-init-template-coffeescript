/*
 * grunt-init-coffee
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Julian Krispel-Samsel
 * Licensed under the MIT license.
 */

/*jshint node:true */
'use strict';

// Basic template description.
exports.description = 'Create a frontend project with coffeescript support, including underscore.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version'),
    init.prompt('main'),
    init.prompt('npm_test', 'grunt nodeunit')
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
        "coffee-script": "*",
        "bower": "*",
        "grunt": "*",
        "grunt-cli": "*",
        "grunt-contrib-coffee": "*",
        "grunt-contrib-watch": "*",
        "static-server": "*"
    };

    props.scripts = {
        "build": "npm install && bower install && grunt && static-server ."
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
