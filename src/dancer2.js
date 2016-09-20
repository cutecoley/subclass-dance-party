var Dancer2 = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

Dancer2.prototype = Object.create(MakeDancer.prototype);
Dancer2.prototype.constructor = Dancer2;

Dancer2.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node = $('<span class="dancer2 lineUpDancer"></span>');
    // call the old version of step at the beginning of any call to this new version of step
  this.$node.toggle();
};