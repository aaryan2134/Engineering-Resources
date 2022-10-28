let inputDir={x:0,y:0}
const movemusic=new Audio('move.mp3')
const foodmusic=new Audio('food.mp3')
const gameOvermusic=new Audio('gameover.mp3')
const music=new Audio('music.mp3')
let speed=12;
let score=0;
let highscore=0;
let previoustime=0;
let snakeArr=[
    {x:16,y:15}
]
let food= {x:15,y:35}
// let inputDir;


function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-previoustime)/1000<1/speed){
        return;
    }
    previoustime=ctime;
    gameEngine();
}
function isCollide(snake){
    for(let i=1;i<snake.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true;
        }
    }
    if((snake[0].x>=36 ||snake[0].x<=0) || (snake[0].y>=36 || snake[0].y<=0)){
        return true;
    }
}
function gameEngine(){

    // game overing conditon
    if(isCollide(snakeArr)){
        gameOvermusic.play();
        music.pause();
        if(score>highscore){
            highscore=score;
            highscorebox.innerHTML="HighScore:"+highscore;
        }
        inputDir={x:0,y:0};
        score=0;
        alert("Game is over press any key for restart");
        snakeArr=[{x:16,y:15}];
        music.play();
    }


    // when food is eaten generating new food and increment score;
    if(snakeArr[0].x===food.x && snakeArr[0].y===food.y){
        score+=1;
        scorebox.innerHTML ="Score:" +score;
        foodmusic.play();
        snakeArr.unshift({x : snakeArr[0].x+inputDir.x,y : snakeArr[0].y+inputDir.y});
        let a=14;
        let b=24;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    }

   //moving of snake
    for(let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;


    board.innerHTML="";
  // display snake in board
  snakeArr.forEach((ele,index)=>{
      snakeElement=document.createElement('div');
      snakeElement.style.gridRowStart=ele.y;
      snakeElement.style.gridColumnStart=ele.x;
      if(index==0){
          snakeElement.classList.add('snakehead');
        }
        else{
          snakeElement.classList.add('snakebody');
      }
      board.appendChild(snakeElement);
  })


  // display food in board
  FoodElement=document.createElement('div');
  FoodElement.style.gridRowStart=food.y;
  FoodElement.style.gridColumnStart=food.x;
  FoodElement.classList.add('food')
  board.appendChild(FoodElement);
}
// document.querySelector('#btn1').innerHTML="sfhsu";
let btn=document.querySelector('#btn1')
btn.addEventListener('click',()=>{
    window.requestAnimationFrame(main);
 })

window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1};
    movemusic.play();
    switch (e.key) {
        case "ArrowUp":
             console.log("ArrowUp")
             inputDir.x=0;
             inputDir.y=-1;
             break;
             
       case "ArrowDown":
           console.log("ArrowDown")
            inputDir.x=0;
            inputDir.y=1;
            break;
            
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x=-1;
            inputDir.y=0;
                break;
                
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x=1;
            inputDir.y=0;
            break;

        default:
            break;
    }
})

