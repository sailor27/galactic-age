import { Age } from './../js/scripts.js';
import { User } from './../js/scripts.js';
describe('toSeconds', function(){
  it('should test whether inputtedAge in years is used to assign age in seconds', function(){
    var currentAge = new Age(1, seconds);
    expect(currentAge.toSeconds()).toEqual(31556952);
  });
});
// var User = require('./../js/scripts.js').UserModule;

describe('User', function() {
  var UserConstructor;

  beforeEach(function(){
    UserConstructor = new User('1990-06-27 14:49:55', age);
  });

  it('should test...', function(){
    expect(UserConstructor.getAge()).toEqual(868672459);
  });

  it('should test...', function(){
    expect(UserConstructor.toYears()).toEqual(31556952);
  });


//these need converted to years first?
  it('should test...', function(){
    expect(UserConstructor.toMercury()).toEqual(this.age / .24);
  });

  it('should test...', function(){
    expect(UserConstructor.toVenus()).toEqual(this.age / .62);
  });

  it('should test...', function(){
    expect(UserConstructor.toMars()).toEqual(this.age / 1.88);
  });
  it('should test...', function(){
    expect(UserConstructor.toJupiter()).toEqual(this.age / 11.86);
  });

});
