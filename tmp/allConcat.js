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
