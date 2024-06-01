var rn=0;

var timer=6;
var scoree=0;

function makeBubble(){
    var cluster="";
    for(var i=0;i<65;i++){
        cluster+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#pbottom").innerHTML=cluster;
}

function runTimer(){
    var timmer=setInterval(function(){
        timer--;
        if(timer>=0){
            document.querySelector("#timer").innerHTML=timer;
        }else{
            clearInterval(timmer);
            document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}

function getHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hitt").innerHTML=rn;
}




function increaseScore(){
    scoree+=10;
    document.querySelector("#score").innerHTML=scoree;
}

document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickedNo=Number(details.target.textContent);
    if(clickedNo===rn){
        increaseScore();
        makeBubble();
        getHit();
    }

});
runTimer();
makeBubble();
getHit();
