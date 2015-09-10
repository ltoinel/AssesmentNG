'use strict';

describe('Controller: SynthesisCtrl', function () {

  // load the controller's module
  beforeEach(module('assesmentNgApp'));

  var SynthesisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SynthesisCtrl = $controller('SynthesisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SynthesisCtrl.awesomeThings.length).toBe(3);
  });
});
