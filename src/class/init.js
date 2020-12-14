/* eslint-disable */
const dancers = [];

function handleClickDancerButton () {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
  * A new object of the given type will be created and added
  * to the stage.
  */
  // make a dancer with a random position
  //
  // TODO:

  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random()-110,
    document.body.clientWidth * Math.random()-150,
    Math.random() * 1000,
    document.body.clientHeight / 10 * Math.random()
  );

  dancer.render();
  dancer.addDancerEvent(() => {

  
    // alert("you clikced the BlinkyDancer!")
  });

  dancers.push(dancer);
  
}

function handleLineUp() {
  dancers.forEach((dancer) => dancer.lineUp())
}


// function addDancerEvent() {
//   console.dir(clickedDancer)
// }

window.addEventListener('DOMContentLoaded', () => {
  document
  .querySelector('#addStarButton')
  .addEventListener('click', handleClickDancerButton);
  document.querySelector('#btnLineUp').addEventListener('click', handleLineUp)


  // const clickedDancer = document.querySelector('.addDancerButton');
  // clickedDancer.addEventListener('click', addDancerEvent);
});
