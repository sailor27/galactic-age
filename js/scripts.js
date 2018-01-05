
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

var now = moment();
console.log(now);

function Age2(birthday, age){
  this.birthday = birthday;
  this.age = age;
}

Age2.prototype.getAge = function(){
  this.age = Math.floor(now - this.birthday);
}
exports.age2Module = Age2;
