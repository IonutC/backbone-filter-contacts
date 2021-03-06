var allTestFiles = []; 
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extensi
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

  
require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',
    paths: {
        "jquery" : "/base/node_modules/jquery/dist/jquery.min",
        "underscore" : "/base/node_modules/underscore/underscore-min",
        "backbone" : "/base/node_modules/backbone/backbone-min",
        "footerModel" : "/base/public/js/app/models/footer",
        "footerCollection" : "/base/public/js/app/collections/footer",
        "footerView": "/base/public/js/app/views/footer",
        "contactsModel" : "/base/public/js/app/models/contacts",
        "contactsCollection" : "/base/public/js/app/collections/contacts",
        "contactsView" : "/base/public/js/app/views/contacts",
        "router" : "/base/public/js/app/router",
        "offline" : "/base/public/js/app/offline.module"
    },
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
