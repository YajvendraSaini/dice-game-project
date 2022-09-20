let ramdomNumber1 = Math.floor(Math.random()*6)+1;
let ramdomNumber2 = Math.floor(Math.random()*6)+1;

let image1 = "Dice-" +ramdomNumber1+".png";
let image2 = "Dice-" +ramdomNumber2+".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if (ramdomNumber1>ramdomNumber2) {
    document.querySelector("div h1").innerHTML = "Player 1 Wins!";
}  else if (ramdomNumber1===ramdomNumber2) {
    document.querySelector("div h1").innerHTML = "Draw!";
} else {
    document.querySelector("div h1").innerHTML = "Player 2 Wins!";
}
