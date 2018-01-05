var Age = require('./../js/scripts.js').ageModule;

describe('toSeconds', function(){
  it('should test whether inputtedAge in years is used to assign age in seconds', function(){
    var currentAge = new Age(3);
    expect(currentAge.toSeconds()).toEqual(94608000);
  });
});
