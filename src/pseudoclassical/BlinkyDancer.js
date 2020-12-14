if (typeof window === 'undefined') {
  var Dancer = require('./Dancer');
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function BlinkyDancer(top, left, timeBetweenSteps) {
  // your code here
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.step();

  // console.log('heelo')
}

BlinkyDancer.prototype = Object.create(Dancer.prototype)
BlinkyDancer.prototype.constructor = BlinkyDancer;

// let oldStep = this.step;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // Dancer.call(this)
  Dancer.prototype.step.call(this);
  // this.step();

  let style = this.$node.style;
  style.display = style.display === 'none' ? 'inline-block' : 'none';
};


// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = BlinkyDancer;
}
