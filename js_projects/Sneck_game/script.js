// Game Constant & Variables
let inputDir = {x: 0, y: 0};
let speed = 5;
let lastPaintTime = 0;
let score = 0;
let board = document.querySelector('.board')
let snakeArr = [

    {x: 13, y:15}
]
food = {x: 5, y: 7}


// Game functions
function main(c_time) {
    window.requestAnimationFrame(main);
    // console.log(c_time);
    if((c_time - lastPaintTime) / 1000 < 1/speed)
    {
        return ;
    }

    lastPaintTime = c_time;
    gameEngine();
}

function isCollide(arr) {
    return false;
}
function gameEngine() {
    // part 1: updating sneck and food
    if(isCollide(snakeArr))
    {
        inputDir = {x: 0, y: 0}
        alert("Game Over, Press any key to play agin!")
        snakeArr = [{x: 13, y: 15}]
        score = 0;
    }

    // if you have eaten the food , increament the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x)
    {
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
        let a = 2
        let b = 16
        food = {x: Math.round(a + (b-a) * Math.random()), y: Math.round(a + (b-a) * Math.random())}
    }

    // actualy move the sneck
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        

        // create new object to avoid the reference problem of array elements sneck
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;



    // part 2: Display sneck and food on board
    board.innerHTML = "";
    snakeArr.forEach((e,index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        
        if(index == 0)
        {
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('sneck')
        }
        board.appendChild(snakeElement)
    });

        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement)

        
        
}




// Game start from 
window.requestAnimationFrame(main);


// Keyboard ke button dabaunga to kya hoga
window.addEventListener('keydown', e =>{
    // kisne button dabaya to start the game 
    inputDir = {x: 0, y: 1}

    switch (e.key) {
        case "ArrowUp":
            console.log("Arrow Up");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("Arrow Down");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowRight":
            console.log("Arrow Right");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        case "ArrowLeft":
            console.log("Arrow Left");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
    
        default:
            break;
    }
})