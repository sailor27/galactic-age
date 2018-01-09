//age in seconds - do not use
export class Age {
	constructor(years){
	  this.years = years;
//	this.seconds = years.toSeconds(); "error: is not a function"

	}
	toSeconds() {
  	this.seconds = Math.floor(this.years * 31556952);
	}
};
//still unsure if this correct (because seconds is undefined until toSeconds is called), but test passes

///////////////////////////////////////////////////////
//testing for moment
// var today = moment();
// var sailor = moment('1990-06-27 14:49:55');
//age constructor for age by birthday
export class User {
	constructor(birthday){
	  this.birthday = birthday;
	}

// get age using birthday and current date
	// getAge(date, birthday){ attempt to use this without age as argument
	// 	return (date - birthday);
	getAge(){
		const date = Date.now();
		var age = (date - this.birthday);
		this.age = (age / 31556952000); //WHY 000???
  	// return (this.today).diff(this.birthday, 'seconds');
	}
	toSeconds() {
		return Math.floor(this.age * 31556952);
	}

//calculate age on other planets

//question: how to access age inside here if it can't be passed in?
	toMercury(){
  	this.mercury = (this.age / 0.24);
	}
	toVenus(){
  	this.venus = (this.age / 0.62);
	}
	toMars(){
  	this.mars = (this.age / 1.88);
	}
	toJupiter(){
  	this.jupiter = (this.age / 11.86);
	}
};

// convert age to years
export const toYears = function(x){
  	return (x / 31556952000);
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
