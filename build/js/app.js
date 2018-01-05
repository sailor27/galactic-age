(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Age(years, seconds){
  this.years = years;
  this.seconds = seconds;
}

Age.prototype.toSeconds = function(){
  this.seconds = Math.floor(this.years * 31536000);
};

// $(document).ready(function() {
//   $("form#age-form").submit(function(event){
//     event.preventDefault();
//     var inputtedAge = $("#age").val();
//     var seconds = 2;
//     var currentAge = new Age(inputtedAge, seconds);
//     console.log(inputtedAge);
//     console.log(currentAge);
//     currentAge.toSeconds();
//     console.log(currentAge);
//   });
// });
exports.AgeModule = Age;

},{}],2:[function(require,module,exports){
//test1
var Age = require('./../js/scripts.js').ageModule;

$(document).ready(function() {
  $("form#age-form").submit(function(event){
    event.preventDefault();
    var inputtedAge = $("#age").val();
    console.log(inputtedAge);

    var currentAge = new Age();
    console.log(currentAge);
    currentAge.toSeconds();
    console.log(currentAge);
  });
});

//test2

},{"./../js/scripts.js":1}]},{},[2]);
