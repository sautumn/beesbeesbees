var Bee = Bee;

var ForagerBee = function() {
  // call the Bee superclass
  Bee.call(this);
  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to find pollen
  this.job = 'find pollen';
  this.honeypot = 0;

  // a canFly property that is set true
  this.canFly = true;

  this.treasureChest = [];

  // a color property inherited from bee that is set to yellow
  //this.color should inherit from the bee

  // a food property that is inherited from grub
  //this.food should go up to prototype chain to get food from grub

};

// set the constructor
ForagerBee.constructor = ForagerBee;

// set the prototype
ForagerBee.prototype = Object.create(Bee);

// a forage method that allows the bee to add a treasure to the treasureChest
ForagerBee.prototype.forage = function(value) {
  //add to the treasechest
  this.treasureChest.push(value);
};