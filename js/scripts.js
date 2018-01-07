//age in seconds
function Age(years, seconds){
  this.years = years;
  this.seconds = seconds;
}

Age.prototype.toSeconds = function(){
  this.seconds = Math.floor(this.years * 31556952);
};

exports.ageModule = Age;
///////////////////////////////////////////////////////
//testing for moment
var today = moment();
var sailor = moment('1990-06-27 14:49:55');


//age constructor for age by birthday
function Age2(birthday, age){
  this.birthday = birthday;
  this.age = age;
}
// get age using birthday and current date
Age2.prototype.getAge = function(){
  this.age = today.diff(this.birthday, 'seconds');
};
// convert age to years
Age2.prototype.toYears = function(){
  this.age = (this.age / 31556952);
};

//calculate age on other planets
Age2.prototype.toMercury = function(){
  this.age = (this.age / 0.24);
};
Age2.prototype.toVenus = function(){
  this.age = (this.age / 0.62);
};
Age2.prototype.toMars = function(){
  this.age = (this.age / 1.88);
};
Age2.prototype.toJupiter = function(){
  this.age = (this.age / 11.86);
};
//export age2 module
exports.age2Module = Age2;

// function You(birthday, age)

//calculate life expectancy
var averageUS = 78.74;
var averageCA = 82.14;
var averageJP = 83.84;
