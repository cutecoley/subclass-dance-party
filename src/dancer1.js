var Dancer1 = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

Dancer1.prototype = Object.create(MakeDancer.prototype);
Dancer1.prototype.constructor = Dancer1;

Dancer1.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step
  this.$node = $('<span class="dancer1"></span>');
  this.$node.toggle();
};
