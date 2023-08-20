console.log("Welcom to tic tac toe game")
// initialize the audioes
let music = new Audio("music.mp3");
let player_turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = 'X';
let game_over = false;
// write the check win function
function checkWing(){
    // I give all the apn tags becuse we need to some the X or 0 for chaking wining sutuaion
    let boxtext = document.getElementsByClassName('boxtext');

    // make the array for the implementing winning posibilities
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText == boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + " Won";
            game_over = true;
            document.querySelector('img').style.opacity = 1;
            gameover.play()
        }
    })
}

// write the turn function which decide or turn thrn the X or 0  
function changeturn() {
    if(turn == "X")
    {
        turn = "0";
    }
    else{
        turn = 'X';
    }
}
// start The game logic
let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element =>{
    // music.play()
    element.addEventListener('click', () =>{
        let boxtext = element.querySelector('.boxtext');
        if(boxtext.innerText === "")
        {
            boxtext.innerText = turn;
            changeturn();
            player_turn.play();
            checkWing();
            // show the turner message who is play
            if(game_over != true)
                document.getElementsByClassName('info')[0].innerHTML = "Turn For " + turn;
        }
    })
})

let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    location.reload()
})
