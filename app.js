let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "green" ,"blue"]

let started = false ;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game is started")
        started = true;
    }

    levelUp();
   
})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    } , 950)
}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    } , 950)
}

function levelUp(){
    userSeq = [];
    level++ ;
    h2.innerText = `level ${level}`
     //random btn choose
     let randomIdx = Math.floor(Math.random() * 3);
     let randomColor = btns[randomIdx];
     let randomBtn = document.querySelector(`.${randomColor}`)
    gameFlash(randomBtn);

    gameSeq.push(randomColor) ;
    console.log(gameSeq)
}

function checkAns(Idx){
   
    if(userSeq[Idx] === gameSeq[Idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp() , 1000)
        }
    }else{

        h2.innerHTML = `Game Over! your score was <b>${level }<b/> <br> press any key to start`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white"

        } , 150)
      
        reset();
    }
}

function btnPress(){
    let btn = this;
    console.log("btn pressed")
    userFlash(btn)

    userColor = btn.getAttribute("id")
    userSeq.push(userColor) ;

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".box")
for(btn of allBtns){
    btn.addEventListener("click" , btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
