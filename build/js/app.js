(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
//test1
var Age = require('./../js/scripts.js').ageModule;
var Age2 = require('./../js/scripts.js').age2Module;
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
    var inputtedBirthday = moment(inputtedBirthday);
    console.log(inputtedBirthday);
    var yourAge = new Age2(inputtedBirthday, age);
    var age = age;
    console.log(yourAge);
    yourAge.getAge();
    console.log(yourAge);
    yourAge.toYears();
    console.log(yourAge);

  });
//moment testing
  $('#time').text(moment());


});

//test2

},{"./../js/scripts.js":1}]},{},[2]);
