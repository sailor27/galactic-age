//test1
import { Age, User, Life, toYears} from './../js/scripts.js';

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
		const minutes = "45";
		const seconds = "55";
		const milliseconds = "999";

//set date to current time as the number of milliseconds since January 1, 1970 00:00:00 UTC
		const date = Date.now(); //why do i have to define this in both?
		console.log("TODAY: " + date);

//create new birthday using inputted date
		// const inputtedBirthday = new Date(year, month, day, hours, minutes, seconds, milliseconds); <----- the real constructor for birthdate
		const inputtedBirthday = new Date("1990", "05", "27", "18", "00", "00");
		console.log("BIRTHDAY : " + inputtedBirthday);

//convert birthday into a number representing number of milliseconds between birthday and January 1, 1970 00:00:00 UTC
		const weirdBirthday = inputtedBirthday.getTime();
		console.log("WEIRD BIRTHDAY: " + weirdBirthday);
		// const aGE = getAge(date, weirdBirthday);
		// console.log("AGE TEST  " + aGE);
//create new user with birthday
		const user = new User(weirdBirthday);


//subtract user's birthday from current date, convert to years, and set number as age
    user.getAge();
		console.log("DIFFERENCE : " + user.age);
		console.log("user.age =" + user.age);

//define age in seconds
		const ageSeconds = user.toSeconds();

//format dates to display using moment
		const dateDisplay = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
		const birthdayDisplay = moment(user.birthday).format("dddd, MMMM Do YYYY, h:mm:ss a");

//output text displaying todays date and user's age in seconds
    $("#output").text("Today is " + dateDisplay + ".");

		$("#output1").text(" You have been alive for " + ageSeconds + " seconds on Earth.");
//output text displaying user's age in years
		$("#output2").text("You have been alive for " + user.age + " years on Earth.");

//starter values for Life expectancy
		const expectancy = 78.74;
		let remaining = remaining;

//create earth life and set remaining property to years left on earth
		// const lifeOnEarth = new Life(user.age, expectancy, remaining);
		// console.log(lifeOnEarth);
		// lifeOnEarth.yearsLeft();
		// console.log(lifeOnEarth.remaining + " years left to live on Earth");

//create mercury life and set remaining property to years left on mercury

    user.toMercury();
    $("#output3").text("Your age is " + user.mercury + " on Mercury");
    //
		// const lifeOnMercury = new Life(user.age, expectancy, remaining);
		// console.log(lifeOnMercury);
		// lifeOnMercury.yearsLeft();
		// console.log(lifeOnMercury.remaining + " years left to live on Mercury");

//create venus life and set remaining property to years left on venus
    user.toVenus();
    $("#output4").text("Your age is " + user.venus + " on Venus");
		// const lifeOnVenus = new Life(user.age, expectancy, remaining);
		// lifeOnVenus.yearsLeft();
		// console.log(lifeOnVenus);
		// console.log(lifeOnVenus.remaining + " years left to live on Venus");

//create mars life and set remaining property to years left on mars
    user.toMars();
    $("#output5").text("Your age is " + user.mars + " on Mars");
		// const lifeOnMars = new Life(user.age, expectancy, remaining);
		// console.log(lifeOnMars);
		// lifeOnMars.yearsLeft();
		// console.log(lifeOnMars.remaining + " years left to live on Mars");

//create jupiter life and set remaining property to years left on jupiter
    user.toJupiter();
    $("#output6").text("Your age is " + user.jupiter + " on Jupiter");
		// const lifeOnJupiter = new Life(user.age, expectancy, remaining);
		// console.log(lifeOnJupiter);
		// lifeOnJupiter.yearsLeft();
		// console.log(lifeOnJupiter.remaining + " years left to live on Jupiter");
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
