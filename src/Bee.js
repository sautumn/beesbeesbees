var Grub = Grub;
var Bee = function() {
  // call the Grub superclass
  Grub.call(this);
  // an age property that is set to 5
  this.age = 5;
  // a color property that is set to yellow
  this.color = 'yellow';
  // a job property that is set to keep on growing
  this.job = 'keep on growing';
};

//set the prototype
Bee.prototype = Object.create(Grub);

// set the constructor
Bee.constuctor = Bee;

Bee.prototype.food = function() {
  return this.food;
};

// an eat method that is inherited from grub
Bee.prototype.eat = function() {
  return Grub.prototype.eat;
};