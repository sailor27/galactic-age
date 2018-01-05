//test1
var Age = require('./../js/scripts.js').ageModule;
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

//testing for JS date constructor
    var Xmas95 = new Date('December 25, 1995 23:15:30');
    var day = Xmas95.getDate();
    console.log(day);
  });


  $("form#birthday-form").submit(function(event){
    event.preventDefault();
    var inputtedBirthday = $("#birthday").val();
    console.log(inputtedBirthday);
  });
  //testing for moment

  // var now = moment();
  // console.log(now);
  $('#time').text(moment());
});

//test2
