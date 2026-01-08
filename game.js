audio= new Audio('bgmusic.mpeg');
audiogo=  new Audio('go.mpeg');
setTimeout(() => {
    audio.play()
}, 500);
score=0;
document.onkeydown=function(e){
cross=true;
    console.log("key code is: ",e.keyCode);
    if(e.keyCode===38){
        teddy=document.querySelector('.teddy');
        teddy.classList.add('animateit');
        setTimeout(() => {
            teddy.classList.remove('animateit')
        }, 700);
    }
    else if(e.keyCode===39){
        teddy=document.querySelector('.teddy');
        teddyX=parseInt(window.getComputedStyle(teddy,null).getPropertyValue('left'));
        teddy.style.left=teddyX+112+"px";
    }
    else if(e.keyCode===37){
        teddy=document.querySelector('.teddy');
        teddyX=parseInt(window.getComputedStyle(teddy,null).getPropertyValue('left'));
        teddy.style.left=(teddyX-112)+"px";
    }
}
setInterval(() => {
    teddy=document.querySelector('.teddy');
    gOver=document.querySelector('.gOver');
    obstacle=document.querySelector('.obst');

    dx=parseInt(window.getComputedStyle(teddy,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(teddy,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);

    if(offsetX<113 && offsetY<42){
        gOver.innerHTML="Game over-reload to play"
        obstacle.classList.remove('obsani');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX <145 && cross){
        score +=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            anidur=parseFloat(window.getComputedStyle(teddy,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.1;
            obstacle.style.animationDuration=newdur+'s';
        }, 500);
    }
}, 10);

function updateScore(score){
    scorecot.innerHTML="Your score: "+score;
}