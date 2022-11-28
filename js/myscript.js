// function to roll dice
function diceRoll() {
  var n = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".dice")
    .setAttribute("src", "images/dice" + n + ".png");
  document.querySelector(".num").innerText = n;
}
