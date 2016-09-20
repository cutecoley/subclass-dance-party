
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="blinkyDancer lineUpDancer"></span>');
  this.time = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  var context = this;
  setTimeout(function() {
    context.step();
  }, this.time);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  console.log("style", styleSettings);
  this.$node.css(styleSettings);
  
};

