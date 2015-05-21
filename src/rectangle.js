var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

//function Rectangle() {

function Rectangle(width, height, color){ // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
  Shape.call(this, 4, color);
  this.width = width;
  this.height = height;
}

Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function(){
	return this.width * this.height;
}
Rectangle.prototype.perimeter = function(){
	return (2 * this.width) + (2 * this.height);
}

Rectangle.prototype.draw = function(){
	
	for (i=0; i < this.width; i++){
		var str = "";
		for (j=0; j< this.height; j++){
			str+='*';
		}
		return str
	}
Rectangle.prototype.toString = function() {
  return "[Shape sides:" + this.width + this.length + ", color:" + this.color +" ]"
	};
}


module.exports = Rectangle;

