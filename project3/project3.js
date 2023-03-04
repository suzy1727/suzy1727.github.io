alert ('test')


const score1 = document.querySelector('.score1');
let guessCount=1;
let score=10;
let secretNum=Math.trunc((Math.random()*100+1));
let userInput=document.querySelector('input');

const guessHistory=document.querySelector('.guessHistory');

let msg=document.querySelector('p');


let checkbtn=document.querySelector('.btn');
console.log (secretNum);
//console.log ('score is' , score);
//console.log (guessHistory);
 
//function checkguess(){
 //if (guessCount===1) 
//{score1.textContent='Previous score:' ;
//score1.textContent += userInput +'';}

checkbtn.addEventListener ('click', function() {
  if (Number.isInteger(userInput)) 
 {
msg.textContent='Data is invalid  Please enter a number from 1-100' ;
}
if (Number(userInput.value)===secretNum)
{
msg.textContent='Congrats! You win!  Play again'; 
}

if (Number(userInput.value)>secretNum)
//if (guessCount===1) {
//score1.textContent='Previous score:' ;
//score1.textContent += userInput +'';

{msg.textContent='Your guess is too high, try again!' ;
//guessHistory.push(userInput.value)  ;
//score1.textContent='Your score:' ;
//score1.textContent='Your Guesses:' ;
//score1.textContent += userInput.value + " ";
}


if (Number(userInput.value)<secretNum)
{msg.textContent='Your guess is too low, try again!';
  
//guessHistory.push(userInput.value);
//guessHistory.textContent='Your guessess:' ;
//guessHistory.textContent += userInput.value +' ';
//score1.textContent='Your score:' ;
//score1.textContent += userInput.value +'';
} 
  if (Number(userInput.value)<1)
  {msg.textContent='Your guess needs to be between 1-100!';
 }
 if (Number(userInput.value)>100)
 {msg.textContent='Your guess 1 needs to be between 1-100!' ;
  }
})

//guessHistory.push(userInput.value) ;
//console.log (guessHistory);

////Reset button
let checkbtnreset=document.querySelector('.button1');

checkbtnreset.addEventListener('click', function () {
      {   let score=10
          


    msg.textContent='this is  supposed to test for reset button, your score will now reset' ;}
    
//document.getElementById("result").value=""
})
//const clear1=[];
console.log ('New score is' , score);
//document.getElementById("result").value=""

