let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame=()=>{
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose.";
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="paper"){        
            //rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }else if(userChoice==="rock"){
            //paper,scissor
             userWin=compChoice==="paper"?false:true;
        }else{
            //scissor,paper
             userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);        
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
}

);