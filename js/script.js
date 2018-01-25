const canvas = document.querySelector('canvas');
const cHeight = canvas.height;

// shorthands to match dwitter.net
let t = 0;
const x = canvas.getContext('2d'), 
      S = Math.sin, 
      C = Math.cos, 
      T = Math.tan;
      

const drawings = [galaxy,squares];
canvas.addEventListener('click', draw);
draw();

var current;
function draw () {
    if (current) clearInterval(current);
    x.clearRect(0,0, canvas.height, canvas.width);
    const randomDrawing = drawings[rand(0,drawings.length-1)];
    current = setInterval(randomDrawing, 50);
}

function rand(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* 
      drawings
                 */

function galaxy () {
    for(j=1;j<6;j++){
        r=t*10-j*10;
        for(i=0;i<300;i++){
            m=i*10;
            x.fillStyle=`hsla(0,100%,0%,${.2*j})`;
            x.fillRect(300+100*S(j)+T(r)*C(m),20+80*j-T(r)*S(m)*S(t),1,1);
        }
    }
    t+=.1;
}

function squares () {
    x.clearRect(0,0, 500, 500);
    for(var i=0;i<100;i++) {
        x.fillStyle=`rgba(${i*4},${i*4},${i*4},${rand(0,9)/10})`;
        const num = rand(5,i);
        x.fillRect(rand(0,500), rand(i*5,500), num, num);
    }
    t++;
}
