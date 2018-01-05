// script test
function Year(input, seconds){
  this.input = input;
  this.toSeconds();
}

Year.prototype.toSeconds = function(){
  return (this.input * 31,536,000);
};
