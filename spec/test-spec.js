var Age = require('./../js/scripts.js').ageModule;

describe('toSeconds', function(){
  it('should test whether inputtedAge in years is used to assign age in seconds', function(){
    var currentAge = new Age(1, seconds);
    expect(currentAge.toSeconds()).toEqual(31556952);
  });
});
var Age2 = require('./../js/scripts.js').age2Module;

describe('Age2', function() {
  var age2Constructor;

  beforeEach(function(){
    age2Constructor = new Age2('1990-06-27 14:49:55', age);
  });

  it('should test...', function(){
    expect(age2Constructor.getAge()).toEqual(868672459);
  });

  it('should test...', function(){
    expect(age2Constructor.toYears()).toEqual(31556952);
  });


//these need converted to years first?
  it('should test...', function(){
    expect(age2Constructor.toMercury()).toEqual(this.age / .24);
  });

  it('should test...', function(){
    expect(age2Constructor.toVenus()).toEqual(this.age / .62);
  });

  it('should test...', function(){
    expect(age2Constructor.toMars()).toEqual(this.age / 1.88);
  });
  it('should test...', function(){
    expect(age2Constructor.toJupiter()).toEqual(this.age / 11.86);
  });

});
