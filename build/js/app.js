(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//age in seconds
var Age = exports.Age = function () {
	function Age(years, seconds) {
		_classCallCheck(this, Age);

		this.years = years;
		this.seconds = seconds;
	}

	_createClass(Age, [{
		key: 'toSeconds',
		value: function toSeconds() {
			this.seconds = Math.floor(this.years * 31556952);
		}
	}]);

	return Age;
}();

;

///////////////////////////////////////////////////////
//testing for moment
// var today = moment();
// var sailor = moment('1990-06-27 14:49:55');

//age constructor for age by birthday

var User = exports.User = function () {
	function User(birthday, age, expectancy, remaining) {
		_classCallCheck(this, User);

		this.birthday = birthday;
		this.age = age;
		this.expectancy = expectancy;
		this.remaining = remaining;
	}
	// get age using birthday and current date


	_createClass(User, [{
		key: 'getAge',
		value: function getAge() {
			var today = moment();
			this.age = today.diff(this.birthday, 'seconds');
		}
		// convert age to years

	}, {
		key: 'toYears',
		value: function toYears() {
			this.age = this.age / 31556952;
		}
		//calculate age on other planets

	}, {
		key: 'toMercury',
		value: function toMercury() {
			this.age = this.age / 0.24;
		}
	}, {
		key: 'toVenus',
		value: function toVenus() {
			this.age = this.age / 0.62;
		}
	}, {
		key: 'toMars',
		value: function toMars() {
			this.age = this.age / 1.88;
		}
	}, {
		key: 'toJupiter',
		value: function toJupiter() {
			this.age = this.age / 11.86;
		}
	}]);

	return User;
}();

;

//calculate life expectancy
// var averageUS = 78.74;
// var averageCA = 82.14;
// var averageJP = 83.84;

var Life = exports.Life = function () {
	function Life(age, expectancy, remaining) {
		_classCallCheck(this, Life);

		this.age = age;
		this.expectancy = expectancy;
		this.remaining = remaining;
	}

	_createClass(Life, [{
		key: 'yearsLeft',
		value: function yearsLeft() {
			this.remaining = this.expectancy - this.age;
		}
	}]);

	return Life;
}();

;

},{}],2:[function(require,module,exports){
'use strict';

var _scripts = require('./../js/scripts.js');

$(document).ready(function () {
  $("form#age-form").submit(function (event) {
    event.preventDefault();

    //assign year based on user input and seconds as a placeholder
    var inputtedAge = $("#age").val();
    var seconds = seconds;

    //make a new Age object
    var currentAge = new _scripts.Age(inputtedAge, seconds);

    //testing for Age constructor
    console.log(inputtedAge);
    console.log(currentAge);

    currentAge.toSeconds();
    console.log(currentAge);
  });

  $("form#birthday-form").submit(function (event) {
    event.preventDefault();
    var inputtedBirthday = $("#birthday").val();
    console.log(inputtedBirthday);

    //determine current age using current birthday and current time
    var yourAge = new _scripts.User(inputtedBirthday, age);
    console.log(yourAge);
    yourAge.getAge();
    console.log(yourAge.age + " seconds on Earth");
    yourAge.toYears();
    console.log(yourAge.age + " years on Earth");

    //starter values for Life expectancy
    var expectancy = 78.74;
    var remaining = remaining;

    //create earth life and set remaining property to years left on earth
    var lifeOnEarth = new _scripts.Life(yourAge.age, expectancy, remaining);
    console.log(lifeOnEarth);
    lifeOnEarth.yearsLeft();
    console.log(lifeOnEarth.remaining + " years left to live on Earth");

    //create mercury life and set remaining property to years left on mercury
    yourAge.toMercury();
    console.log("Your age is " + yourAge.age + " on Mercury");
    var lifeOnMercury = new _scripts.Life(yourAge.age, expectancy, remaining);
    console.log(lifeOnMercury);
    lifeOnMercury.yearsLeft();
    console.log(lifeOnMercury.remaining + " years left to live on Mercury");

    //create venus life and set remaining property to years left on venus
    yourAge.toVenus();
    console.log("Your age is " + yourAge.age + " on Venus");
    var lifeOnVenus = new _scripts.Life(yourAge.age, expectancy, remaining);
    lifeOnVenus.yearsLeft();
    console.log(lifeOnVenus);
    console.log(lifeOnVenus.remaining + " years left to live on Venus");

    //create mars life and set remaining property to years left on mars
    yourAge.toMars();
    console.log("Your age is " + yourAge.age + " on Mars");
    var lifeOnMars = new _scripts.Life(yourAge.age, expectancy, remaining);
    console.log(lifeOnMars);
    lifeOnMars.yearsLeft();
    console.log(lifeOnMars.remaining + " years left to live on Mars");

    //create jupiter life and set remaining property to years left on jupiter
    yourAge.toJupiter();
    console.log("Your age is " + yourAge.age + " on Jupiter");
    var lifeOnJupiter = new _scripts.Life(yourAge.age, expectancy, remaining);
    console.log(lifeOnJupiter);
    lifeOnJupiter.yearsLeft();
    console.log(lifeOnJupiter.remaining + " years left to live on Jupiter");
  });

  $("form#life").submit(function (event) {
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
//test1

},{"./../js/scripts.js":1}]},{},[2]);
