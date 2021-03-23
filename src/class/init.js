/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random() + 20,
    document.body.clientWidth * Math.random() - 80,
    Math.random() * 1000,
    (document.body.clientHeight / 10) * Math.random()
  );
  dancer.render();
  dancers.push(dancer);
}

function handleLineUp() {
  dancers.forEach((dancer) => dancer.ShootingStar());
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#addStarButton")
    .addEventListener("click", handleClickDancerButton);
  document.querySelector("#btnLineUp").addEventListener("click", handleLineUp);
});
