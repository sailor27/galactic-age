//test1
import { Age, User, Life } from './../js/scripts.js';

$(document).ready(function() {
  $("form#age-form").submit(function(event){
    event.preventDefault();

//assign year based on user input and seconds as a placeholder
    const inputtedAge = $("#age").val();
    let seconds = seconds;

//make a new Age object
    const currentAge = new Age(inputtedAge, seconds);

//testing for Age constructor
    console.log(inputtedAge);
    console.log(currentAge);

    currentAge.toSeconds();
    console.log(currentAge);
  });


  $("form#birthday-form").submit(function(event){
    event.preventDefault();
    const inputtedBirthday = $("#birthday").val();
    console.log(inputtedBirthday);

//determine current age using current birthday and current time
    const yourAge = new User(inputtedBirthday, age);
    console.log(yourAge);
    yourAge.getAge();
    console.log(yourAge.age + " seconds on Earth");
    yourAge.toYears();
		console.log(yourAge.age + " years on Earth");


//starter values for Life expectancy
		const expectancy = 78.74;
		let remaining = remaining;

//create earth life and set remaining property to years left on earth
		const lifeOnEarth = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnEarth);
		lifeOnEarth.yearsLeft();
		console.log(lifeOnEarth.remaining + " years left to live on Earth");

//create mercury life and set remaining property to years left on mercury
    yourAge.toMercury();
    console.log("Your age is " + yourAge.age + " on Mercury");
		const lifeOnMercury = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnMercury);
		lifeOnMercury.yearsLeft();
		console.log(lifeOnMercury.remaining + " years left to live on Mercury");

//create venus life and set remaining property to years left on venus
    yourAge.toVenus();
    console.log("Your age is " + yourAge.age + " on Venus");
		const lifeOnVenus = new Life(yourAge.age, expectancy, remaining);
		lifeOnVenus.yearsLeft();
		console.log(lifeOnVenus);
		console.log(lifeOnVenus.remaining + " years left to live on Venus");

//create mars life and set remaining property to years left on mars
    yourAge.toMars();
    console.log("Your age is " + yourAge.age + " on Mars");
		const lifeOnMars = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnMars);
		lifeOnMars.yearsLeft();
		console.log(lifeOnMars.remaining + " years left to live on Mars");

//create jupiter life and set remaining property to years left on jupiter
    yourAge.toJupiter();
    console.log("Your age is " + yourAge.age + " on Jupiter");
		const lifeOnJupiter = new Life(yourAge.age, expectancy, remaining);
		console.log(lifeOnJupiter);
		lifeOnJupiter.yearsLeft();
		console.log(lifeOnJupiter.remaining + " years left to live on Jupiter");
  });

	$("form#life").submit(function(event){
		event.preventDefault();
    const selectedCountry = $("#country").val();
		const smokes = $("#smokes").val();
		const diet = $("#diet").val();
		console.log(selectedCountry, smokes, diet);
	});
//moment testing
  $('#time').text(moment());


});

//test2
