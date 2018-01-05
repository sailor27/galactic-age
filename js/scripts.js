
function Age(years, seconds){
  this.years = years;
  this.seconds = seconds;
}

//date constructor is built into javascript
// function Date(year, month, day, hours, minutes, seconds, milliseconds);

Age.prototype.toSeconds = function(){
  this.seconds = Math.floor(this.years * 31536000);
};

exports.ageModule = Age;
///////////////////////////////////////////////////////
//testing for moment
var today = moment('2018-01-05 14:12:05');
var birthday = moment('1990-06-27 14:12:05');

var arge = birthday.diff(today);
alert(arge);







function Age2(birthday, age){
  this.birthday = birthday;
  this.age = age;
}



Age2.prototype.getAge = function(){
  this.age = Math.floor(now - this.birthday);
}
exports.age2Module = Age2;
