import { Age, User, toYears } from './../js/scripts.js';

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
	// const birthday = Date.now();
	const birthday = new Date("1990", "05", "27", "18", "00", "00");
	let testUser = new User(birthday);

	beforeEach(function(){
	});

	it('should get the age by subtracting the inputted birthday from the date', function(){
		testUser.getAge();
		expect(testUser.age).toBeLessThan(28);
	});

	it('should get the age on Mercury by dividing the age by 0.24', function(){
		testUser.toMercury();
		expect(testUser.mercury).toBeLessThan(115);
	});

	it('should get the age on Venus by dividing the age by 0.62', function(){
		testUser.toVenus();
		expect(testUser.venus).toBeLessThan(45);
	});

	it('should get the age on Mars by dividing the age by 1.88', function(){
		testUser.toMars();
		expect(testUser.mars).toBeLessThan(15);
	});

	it('should get the age on Jupiter by dividing the age by 11.86', function(){
		testUser.toJupiter();
		expect(testUser.jupiter).toBeLessThan(2.5);
	});
});
