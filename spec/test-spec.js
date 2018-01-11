import { User } from './../js/scripts.js';

describe('User', function() {
	const birthday = new Date("1990", "05", "27", "18", "00", "00");
	let testUser = new User(birthday);
	
	it('should get the age by subtracting the inputted birthday from the date', function(){
		testUser.getAge();
		expect(testUser.age).toBeLessThan(28);
	});

	it('should get the life expectancy on earth by subtracting the age from the inputted national average', function(){
		testUser.age = 1;
		testUser.country = 78.24;
		testUser.getLifeExpectancy();
		expect(testUser.earthLife).toEqual(77.24);
	});

	it('should return user age in seconds', function() {
		testUser.age = 1;
		expect(testUser.toSeconds()).toEqual(31556952);
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
