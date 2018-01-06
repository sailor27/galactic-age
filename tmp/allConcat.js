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
    // var inputtedBirthday = $("#birthday").val();
    // console.log(inputtedBirthday);
    var inputtedBirthday = moment($("#birthday").val());
    console.log(inputtedBirthday);
    var yourAge = new Age2(inputtedBirthday, age);
    var age = age;
    console.log(yourAge);
    yourAge.getAge();
    console.log(yourAge.age + " seconds on Earth");
    yourAge.toYears();
    console.log(yourAge.age + " years on Earth");
    yourAge.toMercury();
    console.log(yourAge.age + " on Mercury");
    yourAge.toVenus();
    console.log(yourAge.age + " on Venus");
    yourAge.toMars();
    console.log(yourAge.age + " on Mars");
    yourAge.toJupiter();
    console.log(yourAge.age + " on Jupiter");
  });
//moment testing
  $('#time').text(moment());


});

//test2
