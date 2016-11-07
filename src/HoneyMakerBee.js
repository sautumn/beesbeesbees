var HoneyMakerBee = function() {
	// call the Bee superclass
	this = Bee.call(this);
	// a job property that is set to make honey
	this.job = "make honey";
	// an age property that is set to 10
	this.age = 10;
	
	// a color property inherited from bee that is set to yellow
	//this.color = should be inherited

	//a honeyPot property that is set to 0
	this.honeyPot = 0;

	// a food property that is inherited from grub
	//this.food = should be inherited
	
};
// set the prototype
HoneyMakerBee.prototype = Object.create(Bee);

// set the constructor
HoneyMakerBee.constructor = HoneyMakerBee;

// an eat method that is inherited from grub
HoneyMakerBee.eat = function(){
	//eat method that is inherited from grub
	Grub.prototype.eat.call(this);
}

// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.makeHoney = function () {
	return this.honeyPot += 1;
}

// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.giveHoney = function () {
	return this.honeyPot -= 1;
}
// Create a HoneyMakerBee class, in pseudoclassical style, with:







