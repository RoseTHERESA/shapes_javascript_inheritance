var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this,4, color);
  this.sideLength = sideLength;
}

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.
Square.prototype.constructor = Square;
Square.prototype = Object.create(Shape.prototype);

Square.prototype.area = function(){
	return this.sideLength * this.sideLength;
}
Square.prototype.perimeter = function(){
	return 4 * this.sideLength;
}

Square.prototype.draw = function(){
	
	for (i=0; i < this.sideLength; i++){
		var str = "";
		for (j=0; j< this.sideLength; j++){
			str+='*';
		}
		return str
	}
Square.prototype.toString = function() {
  return "[Shape sides:" + this.sideLength + ", color:" + this.color +" ]"
	};
}



module.exports = Square;
