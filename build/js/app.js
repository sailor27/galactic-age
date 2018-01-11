(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//age constructor for age by birthday
var User = exports.User = function () {
	function User(birthday, country) {
		_classCallCheck(this, User);

		this.birthday = birthday;
		this.country = country;
	}
	// get age in years using birthday and current date


	_createClass(User, [{
		key: "getAge",
		value: function getAge() {
			var date = Date.now();
			var age = date - this.birthday;
			this.age = age / 31556952000;
		}
	}, {
		key: "toSeconds",
		value: function toSeconds() {
			return Math.floor(this.age * 31556952);
		}
	}, {
		key: "getLifeExpectancy",
		value: function getLifeExpectancy() {
			this.earthLife = this.country - this.age;
		}
		//calculate age on other planets

	}, {
		key: "toMercury",
		value: function toMercury() {
			this.mercury = this.age / 0.24;
		}
	}, {
		key: "toVenus",
		value: function toVenus() {
			this.venus = this.age / 0.62;
		}
	}, {
		key: "toMars",
		value: function toMars() {
			this.mars = this.age / 1.88;
		}
	}, {
		key: "toJupiter",
		value: function toJupiter() {
			this.jupiter = this.age / 11.86;
		}
	}]);

	return User;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _scripts = require("./../js/scripts.js");

$(document).ready(function () {
  $("form#birthday-form").submit(function (event) {
    event.preventDefault();
    $(".life").toggleClass("hidden");
    var year = $("#year").val();
    var month = $("#month").val();
    var day = $("#day").val();
    var hours = $("#hour").val();
    var minutes = "45";
    var seconds = "55";
    var milliseconds = "0000";
    var selectedCountry = $("#country").val();

    //set date to current time as the number of milliseconds since January 1, 1970 00:00:00 UTC
    var date = Date.now();

    //create new birthday using inputted date
    var inputtedBirthday = new Date(year, month, day, hours, minutes, seconds, milliseconds);

    //convert birthday into a number representing number of milliseconds between birthday and January 1, 1970 00:00:00 UTC
    var weirdBirthday = inputtedBirthday.getTime();

    //create new user with birthday
    var user = new _scripts.User(weirdBirthday, selectedCountry);

    //subtract user's birthday from current date, convert to years, and set number as age
    user.getAge();
    //log user's life expectancy on earth
    user.getLifeExpectancy();
    $("#OP").text("Your life expectancy on earth is: " + user.earthLife + " years");
    //define age in seconds
    var ageSeconds = user.toSeconds();

    //format dates to display using moment
    var dateDisplay = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    var birthdayDisplay = moment(user.birthday).format("dddd, MMMM Do YYYY, h:mm:ss a");

    //output text displaying todays date and user's age in seconds
    $("#output").text("Today is " + dateDisplay + ".");

    $("#output1").text(" You have been alive for " + ageSeconds + " seconds on Earth.");
    //output text displaying user's age in years
    $("#output2").text("You have been alive for " + user.age + " years on Earth.");

    //age on different planets
    user.toMercury();
    $("#output3").text("Your age is " + user.mercury + " on Mercury");
    user.toVenus();
    $("#output4").text("Your age is " + user.venus + " on Venus");
    user.toMars();
    $("#output5").text("Your age is " + user.mars + " on Mars");
    user.toJupiter();
    $("#output6").text("Your age is " + user.jupiter + " on Jupiter");
  });

  //moment "clock"
  $('#time').text(moment());
});

//test2

},{"./../js/scripts.js":1}]},{},[2]);
