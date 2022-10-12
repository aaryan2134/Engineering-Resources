var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImage="dice"+randomNumber1+".png";
var randomImagesource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);
  
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
//unction myFunction(){
  //done();
//}

function myFunction(){
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 wins!🚩";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 wins!🚩";

} else{
  document.querySelector("h1").innerHTML="Draw!";
}
}




