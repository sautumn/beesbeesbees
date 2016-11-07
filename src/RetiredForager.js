var ForagerBee = ForagerBee;
var Bee = Bee;

var RetiredForagerBee = function() {
  // call the ForagerBee superclass
  ForagerBee.call(this);

  // an age property that is set to 40
  this.age = 40;
  // a job property that is set to gamble
  this.job = 'gamble';
  // a canFly property that is set to false
  this.canFly = false;
  // a color property that is set to grey
  this.color = 'grey';
  // a forage method that returns "I am too old, let me play cards instead"
  this.forage = 'I am too old, let me play cards instead';

  // a food property that is inherited from grub
  //this.food should go up chain to get the grub

  // an eat method that is inherited from grub
  //this.eat should go up the chain to grub

  // a treasureChest property inherited from ForagerBee that is set to an empty array []
  this.treasureChest = [];

};

// set the prototype
RetiredForagerBee.prototype = Object.create(Bee.prototype);

// set the constructor
RetiredForagerBee.constructor = RetiredForagerBee;

// an always winning gamble method that allows the bee to add a treasure to the treasureChest
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};