let result=document.getElementById("result");
let player1=document.getElementById("player1");
let player2=document.getElementById("player2");

let play=()=>{
    let randomNumber1=Math.floor(Math.random()*6)+1;
    let randomNumber2=Math.floor(Math.random()*6)+1;
    player1.setAttribute("src",`./images/dice${randomNumber1}.png`)
    player2.setAttribute("src",`./images/dice${randomNumber2}.png`)
    if(randomNumber1>randomNumber2){
        result.textContent="Player 1 Won!"
    }else if(randomNumber2>randomNumber1){
        result.textContent="player 2 Won!"
    }else{
        result.textContent="Tie Between Both"
    }
}

