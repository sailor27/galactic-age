(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
function Age2(birthday, age, expectancy, remaining){
  this.birthday = birthday;
  this.age = age;
	this.expectancy = expectancy;
	this.remaining = remaining;
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
// var averageUS = 78.74;
// var averageCA = 82.14;
// var averageJP = 83.84;

function Life(age, expectancy, remaining){
	this.age = age;
	this.expectancy = expectancy;
	this.remaining = remaining;
}

Life.prototype.yearsLeft = function(){
	this.remaining = (this.expectancy - this.age);
}


exports.lifeModule = Life;

},{}],2:[function(require,module,exports){
//test1
var Age = require('./../js/scripts.js').ageModule;
var Age2 = require('./../js/scripts.js').age2Module;
var Life = require('./../js/scripts.js').lifeModule;
// var Age = require('./../js/scripts.js').ageModule;
$(document).ready(function() {
  $("form#age-form").submit(function(event){
    event.preventDefault();

//assign year based on user input and seconds as a placeholder
    var inputtedAge = $("#age").val();
    var seconds = seconds;

//make a new Age object
    var currentAge = new Age(inputtedAge, seconds);

//testing for Age constructor
    console.log(inputtedAge);
    console.log(currentAge);

    currentAge.toSeconds();
    console.log(currentAge);
  });


  $("form#birthday-form").submit(function(event){
    event.preventDefault();
    var inputtedBirthday = $("#birthday").val();
    console.log(inputtedBirthday);

//determine current age using current birthday and current time
    var yourAge = new Age2(inputtedBirthday, age);
    console.log(yourAge);
    yourAge.getAge();
    console.log(yourAge.age + " seconds on Earth");
    yourAge.toYears();
		console.log(yourAge.age + " years on Earth");


//starter values for Life expectancy
		var expectancy = 78.74;
		var remaining = remaining;

//create earth life and set remaining property to years left on earth
		var lifeOnEarth = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnEarth);
		lifeOnEarth.yearsLeft();
		console.log(lifeOnEarth.remaining + " years left to live on Earth");

//create mercury life and set remaining property to years left on mercury
    yourAge.toMercury();
    console.log("Your age is " + yourAge.age + " on Mercury");
		var lifeOnMercury = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnMercury);
		lifeOnMercury.yearsLeft();
		console.log(lifeOnMercury.remaining + " years left to live on Mercury");

//create venus life and set remaining property to years left on venus
    yourAge.toVenus();
    console.log("Your age is " + yourAge.age + " on Venus");
		var lifeOnVenus = new Life(yourAge.age, expectancy, remaining);
		lifeOnVenus.yearsLeft();
		console.log(lifeOnVenus);
		console.log(lifeOnVenus.remaining + " years left to live on Venus");

//create mars life and set remaining property to years left on mars
    yourAge.toMars();
    console.log("Your age is " + yourAge.age + " on Mars");
		var lifeOnMars = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnMars);
		lifeOnMars.yearsLeft();
		console.log(lifeOnMars.remaining + " years left to live on Mars");

//create jupiter life and set remaining property to years left on jupiter
    yourAge.toJupiter();
    console.log("Your age is " + yourAge.age + " on Jupiter");
		var lifeOnJupiter = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnJupiter);
		lifeOnJupiter.yearsLeft();
		console.log(lifeOnJupiter.remaining + " years left to live on Jupiter");
  });

	$("form#life").submit(function(event){
		event.preventDefault();
    var selectedCountry = $("#country").val();
		var smokes = $("#smokes").val();
		var diet = $("#diet").val();
		console.log(selectedCountry, smokes, diet);
	});
//moment testing
  $('#time').text(moment());


});

//test2

},{"./../js/scripts.js":1}]},{},[2]);
