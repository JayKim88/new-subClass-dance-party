if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// Dancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function Dancer(top, left, timeBetweenSteps) {
  // your code here
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.$node = this.createDancerElement();
  this.setPosition(this.top, this.left);
  this.step();
}

  Dancer.prototype.createDancerElement = function() {
    let elDancer = document.createElement('span');
    elDancer.className = 'dancer';
    return elDancer;
  };

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`
    });
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = Dancer;
}
