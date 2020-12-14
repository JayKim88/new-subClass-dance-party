// const { resetHistory } = require('sinon');

if (typeof window === 'undefined') {
  var jsdom = require('jsdom');
  var { JSDOM } = jsdom;
  var { document } = (new JSDOM('')).window;
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
  // your code here
  constructor(top, left, timeBetweenSteps, size){
    // this.top = top;
    // this.left = left;
    this.size = size;

    this.$node = this.createDancerElement();
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
    
    this.onDancerClick = () => {};
    this.$node.onclick = this.onDancerClick;
    // this.createDancerElement().addEventListener('click', this.addEventButton);
    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
  }
  
  createDancerElement() {
    // let elDancer = document.createElement('span');
    let elImg = document.createElement('img');
    // elDancer.appendChild(elImg);
    // elDancer.className = 'dancer';
    elImg.className = 'dancer';
    elImg.setAttribute('src', '/src/class/img/star.png');
    elImg.width = this.size;
    elImg.height = this.size;

    elImg.addEventListener('click', function(){
      elImg.src = '/src/class/img/explosion.png';
      function effectEnd() {
        // elDancer.removeChild(elImg)
        // this.setPosition(){
          
        // }
        elImg.style.display = 'none';
      }
      setTimeout(effectEnd, 0);
    })
    return elImg;
    // return elDancer;
  }
  
  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps)
  }
  
  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`
    })
  }

  addDancerEvent(eventFn){
    this.$node.onclick = eventFn;
  }
  
  render() {
    document.body.appendChild(this.$node);
  }

  lineUp() {
    // this.$node.style.transition;
    this.$node.style.top = '80px';
  }
}
// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = DancerClass;
}
