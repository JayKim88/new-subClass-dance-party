if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
}
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
  constructor(bottom, left, timeBetweenSteps, size) {
    this.size = size;
    this.$node = this.createDancerElement();
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(bottom, left);

    this.onDancerClick = () => {};
    this.$node.onclick = this.onDancerClick;
    // this.createDancerElement().addEventListener('click', this.addEventButton);
    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
  }

  createDancerElement() {
    let elImg = document.createElement("img");
    elImg.className = "dancer";
    elImg.src = "./src/class/img/star.png";
    elImg.width = this.size;
    elImg.height = this.size;

    elImg.addEventListener("click", function (e) {
      function effectEnd() {
        elImg.remove();
      }
      setTimeout(effectEnd, 800);
    });
    return elImg;
  }

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(bottom, left) {
    // Use css top and left properties to position our <span> tag
    Object.assign(this.$node.style, {
      bottom: `${bottom}px`,
      left: `${left}px`,
    });
  }

  addDancerEvent(eventFn) {
    this.$node.onclick = eventFn;
  }

  render() {
    document.body.appendChild(this.$node);
  }

  ShootingStar() {
    let stars = document.querySelectorAll(".dancer");
    function removeStars() {
      for (let ele of stars) {
        ele.remove();
      }
    }
    this.$node.style.bottom = "0px";
    this.$node.style.transition = "bottom 2s";
    setTimeout(() => removeStars(), 3000);
  }
}
// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = DancerClass;
}
