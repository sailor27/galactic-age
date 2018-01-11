//age constructor for age by birthday
export class User {
	constructor(birthday, country){
	  this.birthday = birthday;
		this.country = country;
	}
// get age in years using birthday and current date
	getAge(){
		const date = Date.now();
		var age = (date - this.birthday);
		this.age = (age / 31556952000);
	}
	toSeconds() {
		return Math.floor(this.age * 31556952);
	}
	getLifeExpectancy(){
		this.earthLife = (this.country - this.age);
	}
//calculate age on other planets
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
}
