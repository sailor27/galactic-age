import { Age, User } from './../js/scripts.js';

//test function to convert age in years to seconds
describe('toSeconds', function(){
	const years = 1;
	let age = 0;
	let currentAge;

	beforeEach(function(){
		currentAge = new Age(years, age);
	});

  it('should test whether inputtedAge converts to seconds', function(){
    expect(currentAge.toSeconds(1)).toEqual(31556952);
  });
});


describe('User', function() {
	const birthday = '1990-06-27 20:45:00';
	const today = '1990-06-27 20:45:00';

  let testUser;

  beforeEach(function(){
    testUser = new User(birthday, age);
  });

  // it('should test...', function(){
  //   expect(testUser.getAge()).toEqual(0);
  // });
  //
  it('should test...', function(){
    expect(testUser.toYears()).toEqual(0);
  });


//these need converted to years first?
  // it('should test...', function(){
  //   expect(testUser.toMercury()).toEqual(this.age / .24);
  // });
  //
  // it('should test...', function(){
  //   expect(testUser.toVenus()).toEqual(this.age / .62);
  // });
  //
  // it('should test...', function(){
  //   expect(testUser.toMars()).toEqual(this.age / 1.88);
  // });
  // it('should test...', function(){
  //   expect(testUser.toJupiter()).toEqual(this.age / 11.86);
  // });

});
