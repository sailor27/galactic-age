
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
//     var currentAge = new Age(inputtedAge);
//     console.log(inputtedAge);
//     console.log(currentAge);
//     currentAge.toSeconds();
//     console.log(currentAge);
//   });
// });
exports.AgeModule = Age;
