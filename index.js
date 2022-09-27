const startGame=document.querySelector(".startGame")
const playerOne=document.querySelector(".player-one")
const playerTwo=document.querySelector(".player-two")
let rock=1
let paper=2
let scissors=3

function play(){
    let player1=Math.floor(Math.random()*3+1)
    playerOne.textContent=player1
    let player2=Math.floor(Math.random()*3+1)
    playerTwo.textContent=player2
    if(player1===player2){
        console.log("draw")
        playerOneRock()
        playerTwoRock()
    }
    else if(player1==1&&player2==2){//rock vs paper 1
        console.log("Player two wins")
        playerOneRock()
        playerTwoPaper()
    }
    else if(player1==1&&player2==3){//rock vs scissors 2
        console.log("Player one wins")
        playerOneRock()
        playerTwoScissors()
    }
    else if(player1==2&&player2==3){//paper vs scissors 3
        console.log("Player two wins")
        playerOnePaper()
        playerTwoScissors()
    }
    else if(player1==2&&player2==1){//paper vs rock 4
        console.log("Player one wins")
        playerOnePaper()
        playerTwoRock()
    }
    else if(player1==3&&player2==1){//scissors vs rock 5
        console.log("Player two wins")
        playerOnePaper()
        playerTwoRock()
    }
    else if(player1==3&&player2==1){//scissors vs paper 6
        console.log("Player two wins")
        playerOneScissors()
        playerTwoPaper()
    }
    else{
        console.log("We mzae you  left something out")
    }
}
startGame.addEventListener("click", play)
function playerOneRock(){
    const image1=document.createElement("img")
    image1.setAttribute('src','rock.png')
    image1.setAttribute('alt', 'rock')
    image1.setAttribute('height', 350);
    image1.setAttribute('width', 550);
    image1.style.border='5px solid yellow';
    image1.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image1.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector(".player-one");
    box.appendChild(image1)
}
function playerOnePaper(){
    const image11=document.createElement("img")
    image11.setAttribute('src','paper.png')
    image11.setAttribute('alt', 'paper')
    image11.setAttribute('height', 350);
    image11.setAttribute('width', 550);
    image11.style.border='5px solid yellow';
    image11.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image11.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector(".player-one");
    box.appendChild(image11)
}
function playerOneScissors(){
    const image12=document.createElement("img")
    image12.setAttribute('src','scissors.png')
    image12.setAttribute('alt', 'scissors')
    image12.setAttribute('height', 350);
    image12.setAttribute('width', 550);
    image12.style.border='5px solid yellow';
    image12.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image12.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector(".player-one");
    box.appendChild(image12)
}
function playerTwoPaper(){
    const image2=document.createElement("img")
    image2.setAttribute('src','paper.png')
    image2.setAttribute('alt', 'paper')
    image2.setAttribute('height', 350);
    image2.setAttribute('width', 550);
    image2.style.border='5px solid yellow';
    image2.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image2.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector(".player-two");
    box.appendChild(image2)
}
function playerTwoScissors(){
    const image21=document.createElement("img")
    image21.setAttribute('src','scissors.png')
    image21.setAttribute('alt', 'scissors')
    image21.setAttribute('height', 350);
    image21.setAttribute('width', 550);
    image21.style.border='5px solid yellow';
    image21.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image21.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector(".player-two");
    box.appendChild(image21)
}
function playerTwoRock(){
    const image22=document.createElement("img")
    image22.setAttribute('src','rock.png')
    image22.setAttribute('alt', 'rock')
    image22.setAttribute('height', 350);
    image22.setAttribute('width', 550);
    image22.style.border='5px solid yellow';
    image22.onerror=function handleError(){
        console.log('Image could not be loaded')
    };
    image22.onload=function handleImageLoaded(){
        console.log("Successful")
    }
    const box=document.querySelector(".player-two");
    box.appendChild(image22)
}