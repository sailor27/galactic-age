//age in seconds
export class Age {
	constructor(years, seconds){
	  this.years = years;
	  this.seconds = seconds;
	}
	toSeconds(){
  	this.seconds = Math.floor(this.years * 31556952);
	}
};


///////////////////////////////////////////////////////
//testing for moment
// var today = moment();
// var sailor = moment('1990-06-27 14:49:55');

//age constructor for age by birthday
export class User {
	constructor(birthday, age, expectancy, remaining){
	  this.birthday = birthday;
	  this.age = age;
		this.expectancy = expectancy;
		this.remaining = remaining;
	}
// get age using birthday and current date
	getAge(){
		var today = moment();
  	this.age = today.diff(this.birthday, 'seconds');
	}
// convert age to years
	toYears(){
  	this.age = (this.age / 31556952);
	}
//calculate age on other planets
	toMercury(){
  	this.age = (this.age / 0.24);
	}
	toVenus(){
  this.age = (this.age / 0.62);
	}
	toMars(){
  	this.age = (this.age / 1.88);
	}
	toJupiter(){
  	this.age = (this.age / 11.86);
	}
};

//calculate life expectancy
// var averageUS = 78.74;
// var averageCA = 82.14;
// var averageJP = 83.84;

export class Life {
	constructor(age, expectancy, remaining) {
		this.age = age;
		this.expectancy = expectancy;
		this.remaining = remaining;
	}
	yearsLeft() {
		this.remaining = (this.expectancy - this.age);
	}
};
