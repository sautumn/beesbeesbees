var Grub = function() {
	// an age property that is set to 0
	this.age = 0;
	// a color property that is set to pink
	this.color = 'pink';
	// a food property that is set to jelly
	this.food = 'jelly';
};

// an eat method
Grub.prototype.eat = function() {
	//eat method
	return this.food;
};


