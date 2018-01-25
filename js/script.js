const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const cHeight = canvas.height;

let time = 0;
function draw() {
    ctx.clearRect(0,0, 500, 200);
    for(var i=0;i<100;i++) {
        ctx.fillStyle=`rgba(${i*4},${i*4},${i*4},${rand(0,9)/10})`;
        const num = rand(5,i);
        ctx.fillRect(rand(0,500), rand(i*1.25,100), num, num);
    }
    time++;
}

setInterval(draw, 150);

function rand(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
