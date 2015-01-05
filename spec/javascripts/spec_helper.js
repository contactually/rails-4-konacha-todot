// set the Mocha test interface
// see http://visionmedia.github.com/mocha/#interfaces
mocha.ui('bdd');

// ignore the following globals during leak detection
mocha.globals(['Backbone', 'JST']);

// Show stack trace on failing assertion.
chai.config.includeStack = true;

ENV = {
  TESTING: true
};

beforeEach(function() {
  window.SANDBOX = $("#konacha");
});
