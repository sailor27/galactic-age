
function Age(years, seconds){
  this.years = years;
  this.seconds = seconds;
}

//date constructor is built into javascript
// function Date(year, month, day, hours, minutes, seconds, milliseconds);

Age.prototype.toSeconds = function(){
  this.seconds = Math.floor(this.years * 31556952);
};

exports.ageModule = Age;
///////////////////////////////////////////////////////
//testing for moment
var today = moment();
var sailor = moment('1990-06-27 14:49:55');

function Age2(birthday, age){
  this.birthday = birthday;
  this.age = age;
}

Age2.prototype.getAge = function(){
  this.age = today.diff(this.birthday, 'seconds');
}
Age2.prototype.toYears = function(){
  this.age = (this.age / 31556952);
}
exports.age2Module = Age2;
