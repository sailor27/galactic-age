//test1
var Age = require('./../js/scripts.js').ageModule;

$(document).ready(function() {
  $("form#age-form").submit(function(event){
    event.preventDefault();
    var inputtedAge = $("#age").val();
    var currentAge = new Age(inputtedAge);
    console.log(inputtedAge);
    console.log(currentAge);
    currentAge.toSeconds();
    console.log(currentAge);
  });
});
