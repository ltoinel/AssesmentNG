'use strict';

describe('Service: assesmentFactory', function () {

  // load the service's module
  beforeEach(module('assesmentNgApp'));

  // instantiate service
  var assesmentFactory;
  beforeEach(inject(function (_assesmentFactory_) {
    assesmentFactory = _assesmentFactory_;
  }));

  it('should do something', function () {
    expect(!!assesmentFactory).toBe(true);
  });

});
