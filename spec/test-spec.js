import { Age, User } from './../js/scripts.js';

//test function to convert age in years to seconds
describe('toSeconds', function(){
	const years = 1;
	let currentAge;

	beforeEach(function(){
		currentAge = new Age(years);
	});

  it('should test whether inputted age converts to seconds', function(){
		currentAge.toSeconds();
    expect(currentAge.seconds).toEqual(31556952);
  });
});

describe('User', function() {
	const birthday = Date.now();
	// const birthday = new Date("06", "12", "27", "18", "00", "00", "00");
	let testUser = new User(birthday);

	beforeEach(function(){
	});

	it('should get the age by subtracting the inputted birthday from the date', function(){
		expect(testUser.getAge()).toBeLessThan(26);
		//note : The <26 refers to the difference in milliseconds between the two numbers that was occuring in the time the test takes to run
	});
});


// describe('User', function() {
// 	const birthday = '1990-06-27 20:45:00';
// 	const today = '1990-06-27 20:45:00';
//
//   let testUser;
//
//   beforeEach(function(){
//     testUser = new User(birthday, age);
//   });

  // it('should test...', function(){
  //   expect(testUser.getAge()).toEqual(0);
  // });
  //
  // it('should test...', function(){
  //   expect(testUser.toYears()).toEqual(0);
  // });


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
