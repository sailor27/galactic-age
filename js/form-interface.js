//test1
import { Age, User, Life } from './../js/scripts.js';

$(document).ready(function() {
  $("form#age-form").submit(function(event){
    event.preventDefault();

//assign year based on user input and seconds as a placeholder
    const inputtedAge = $("#age").val();

//make a new Age object
    const currentAge = new Age(inputtedAge);

//testing for Age constructor
    currentAge.toSeconds();
    console.log(currentAge);
  });


  $("form#birthday-form").submit(function(event){
    event.preventDefault();
		const year = $("#year").val();
		const month = $("#month").val();
		const day = $("#day").val();
		const hours = $("#hour").val();
		const minutes = 0;
		const seconds = 0;
		const milliseconds = 0;

    const inputtedBirthday = new Date(year, month, day, hours, minutes, seconds, milliseconds);

    console.log(inputtedBirthday);

//determine current age using current birthday and current time
		const today = Date.now();
    const user = new User(inputtedBirthday);
    const ageSeconds = user.getAge();

    $("#output").text("Today is " + today + ". You have been alive for " + ageSeconds + " seconds on Earth.");

    // yourAge.toYears();
		// console.log(yourAge.age + " years on Earth");


//starter values for Life expectancy
		const expectancy = 78.74;
		let remaining = remaining;

//create earth life and set remaining property to years left on earth
		const lifeOnEarth = new Life(user.age, expectancy, remaining);
		console.log(lifeOnEarth);
		lifeOnEarth.yearsLeft();
		console.log(lifeOnEarth.remaining + " years left to live on Earth");

//create mercury life and set remaining property to years left on mercury
    user.toMercury();
    console.log("Your age is " + user.age + " on Mercury");
		const lifeOnMercury = new Life(user.age, expectancy, remaining);
		console.log(lifeOnMercury);
		lifeOnMercury.yearsLeft();
		console.log(lifeOnMercury.remaining + " years left to live on Mercury");

//create venus life and set remaining property to years left on venus
    user.toVenus();
    console.log("Your age is " + user.age + " on Venus");
		const lifeOnVenus = new Life(user.age, expectancy, remaining);
		lifeOnVenus.yearsLeft();
		console.log(lifeOnVenus);
		console.log(lifeOnVenus.remaining + " years left to live on Venus");

//create mars life and set remaining property to years left on mars
    user.toMars();
    console.log("Your age is " + user.age + " on Mars");
		const lifeOnMars = new Life(user.age, expectancy, remaining);
		console.log(lifeOnMars);
		lifeOnMars.yearsLeft();
		console.log(lifeOnMars.remaining + " years left to live on Mars");

//create jupiter life and set remaining property to years left on jupiter
    user.toJupiter();
    console.log("Your age is " + user.age + " on Jupiter");
		const lifeOnJupiter = new Life(user.age, expectancy, remaining);
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
