import {User} from './../js/scripts.js';

$(document).ready(function() {
  $("form#birthday-form").submit(function(event){
    event.preventDefault();
    $(".life").toggleClass("hidden");
		const year = $("#year").val();
		const month = $("#month").val();
		const day = $("#day").val();
		const hours = $("#hour").val();
		const minutes = "45";
		const seconds = "55";
		const milliseconds = "0000";
    const selectedCountry = $("#country").val();

//set date to current time as the number of milliseconds since January 1, 1970 00:00:00 UTC
		const date = Date.now();

//create new birthday using inputted date
		const inputtedBirthday = new Date(year, month, day, hours, minutes, seconds, milliseconds);

//convert birthday into a number representing number of milliseconds between birthday and January 1, 1970 00:00:00 UTC
		const weirdBirthday = inputtedBirthday.getTime();

//create new user with birthday
		const user = new User(weirdBirthday, selectedCountry);

//subtract user's birthday from current date, convert to years, and set number as age
    user.getAge();
//log user's life expectancy on earth
    user.getLifeExpectancy();
    $("#OP").text("Your life expectancy on earth is: " + user.earthLife + " years");
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

//age on different planets
    user.toMercury();
    $("#output3").text("Your age is " + user.mercury + " on Mercury");
    user.toVenus();
    $("#output4").text("Your age is " + user.venus + " on Venus");
    user.toMars();
    $("#output5").text("Your age is " + user.mars + " on Mars");
    user.toJupiter();
    $("#output6").text("Your age is " + user.jupiter + " on Jupiter");
  });

//moment "clock"
  $('#time').text(moment());
});

//test2
