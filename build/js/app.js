(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Age(years, seconds){
  this.years = years;
  this.seconds = seconds;
}

//date constructor is built into javascript
// function Date(year, month, day, hours, minutes, seconds, milliseconds);

Age.prototype.toSeconds = function(){
  this.seconds = Math.floor(this.years * 31536000);
};


//user interface logic - located here for testing only
// $(document).ready(function() {
//   $("form#age-form").submit(function(event){
//     event.preventDefault();
//
// //assign year based on user input and seconds as a placeholder
//     var inputtedAge = $("#age").val();
//     var seconds = seconds;
//
// //make a new Age object
//     var currentAge = new Age(inputtedAge, seconds);
//
// //testing for Age constructor
//     console.log(inputtedAge);
//     console.log(currentAge);
//
//     currentAge.toSeconds();
//     console.log(currentAge);
//
// //testing for JS date constructor
//     var Xmas95 = new Date('December 25, 1995 23:15:30');
//     var day = Xmas95.getDate();
//     console.log(day);
//   });
//
// //testing for moment
// // var now = moment();
// // console.log(now);
//
//   $("form#birthday-form").submit(function(event){
//     event.preventDefault();
//     var inputtedBirthday = $("#birthday").val();
//     console.log(inputtedBirthday);
//   });
//
// });
exports.AgeModule = Age;

},{}],2:[function(require,module,exports){
//test1
var Age = require('./../js/scripts.js').ageModule;

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

//testing for JS date constructor
    var Xmas95 = new Date('December 25, 1995 23:15:30');
    var day = Xmas95.getDate();
    console.log(day);
  });

//testing for moment
// var now = moment();
// console.log(now);

  $("form#birthday-form").submit(function(event){
    event.preventDefault();
    var inputtedBirthday = $("#birthday").val();
    console.log(inputtedBirthday);
  });

});

//test2

},{"./../js/scripts.js":1}]},{},[2]);
