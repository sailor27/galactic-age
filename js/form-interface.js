//test1
import { Age } from './../js/scripts.js';
import { User } from './../js/scripts.js';
import { Life } from './../js/scripts.js';
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
    var yourAge = new User(inputtedBirthday, age);
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
