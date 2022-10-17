

/*Here we have to generate a random number for selecting random dice faces.So, for that a variable is created name as randomNumber1, to create random number Math.random 
method is used.This will generated a number between 0 and 0.999999 recurring; in this case we need a random number between 1 and 6 for that 6 is multiplied with Math.random method,
 we now have a number between 0 and 5,to change the range from 0 to 5 to 1 to 6 , 1 is added here, we can't have that random number be a decimal number,so we need it
to be a whole number we can do that by rounding it using Math.floor.This is done in line no 8.*/

var randomNumber1=Math.floor(Math.random()*6+1);
//randomNumber variable is used to select a random dice image.Here concatination is used to add this number to the end of the string "dice" and get random number.
// for selecting the whole thing a variable is created named radomDiceImage
var randomDiceImage="dice"+randomNumber1+".png";
var randomImagesource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);
  
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


function myFunction()
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 wins!🚩";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 wins!🚩";

} else{
  document.querySelector("h1").innerHTML="Draw!";
}
}




