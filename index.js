var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource1 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSource1);

if(randomNumber1 > randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML = "⛳Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins!⛳";

}
else{
  document.querySelectorAll("h1")[0].innerHTML = "Its A Draw!";
}
