let youPick;
let computerPick;
let score ={
    win:0,
    lose:0,
    tie:0
};

//computer pick 
function randomNumber(){
  
    let number=Math.random();
    if (number >0 && number <1/3 ){
        computerPick = 'rock'
    }else if (number >1/3 && number < 2/3){
        computerPick = 'paper';
    }else if (number <1 && number >2/3 ){
        computerPick = 'cissor';
    }
    else{
        computerPick = 'somethig_wrong'
    }

}

const saveScore=JSON.parse(localStorage.getItem('score'));
if(saveScore){
    score=saveScore;    
}

document.querySelector('.score').innerHTML =`win:${score.win} lose:${score.lose}tie:${score.tie}`;





updateScore();

//game playmode 

function play(){
    let result;
    randomNumber();
    

    if (  (youPick === 'rock' && computerPick === 'cissor' ) ||
          (youPick === 'paper' && computerPick === 'rock') ||
          (youPick ==='cissor' && computerPick === 'paper')){
            result = 'win';
        }
    else if ((youPick === 'rock' && computerPick === 'paper') ||
            (youPick === 'paper'&& computerPick === 'cissor') ||
            (youPick === 'cissor' && computerPick === 'rock')){
                result = 'lose';
        }
    else if (youPick === computerPick){
                result = 'tie';
    }



    if (result ==='win'){
        score.win+=1;
    }else if (result === 'lose'){
        score.lose+=1;
    }else if (result === 'tie'){
        score.tie+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    
    
    
    
  







     //display in html 
    document.querySelector('.status').innerHTML =`${result}`;
    document.querySelector('.whatPick').innerHTML =`<b>🫀>>${youPick}  🤖>>${computerPick}</b>`;
    updateScore();
   
}



//rest score
function restButton(){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
   localStorage.removeItem('score');

   //display in html 
    document.querySelector('.status').innerHTML =``;
    document.querySelector('.whatPick').innerHTML =``;

    updateScore();
}

//updatescore
function updateScore(){

     //display in html 
    document.querySelector('.win').innerHTML =`${score.win}`;
    document.querySelector('.lose').innerHTML =`${score.lose}`;
    document.querySelector('.tie').innerHTML =`${score.tie}`;
}

 