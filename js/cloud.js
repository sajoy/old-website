const cloud = document.createElement( 'img' );
cloud.src = '../imgs/cloud2.png';
cloud.id = 'cloud';

document.body.appendChild( cloud );

document.body.addEventListener( 'keydown', move );

function move ( e ) {
    switch (event.code) {
        case "keyA":
        case "ArrowLeft":
            moveCloud('left');
            break;
        case "KeyD":
        case "ArrowRight":
            moveCloud('right');
            break;
        case "KeyS":
        case "ArrowDown":
            moveCloud('down');
            break;
        case "KeyW":
        case "ArrowUp":
            moveCloud('up');
            break;
    }
}

function moveCloud ( direction ) {
    if ( borderCheck( direction ) ) return;

    face( direction );

    const map = {
        'right': 'left',
        'left': 'left',
        'up': 'top',
        'down': 'top'
    };

    const velocity = {
        'right': 20,
        'left': -20,
        'up': -20,
        'down': 20,
    }
    const coords = getCoord();

    cloud.style[map[direction]] = coords[map[direction]] + velocity[direction] + 'px'; 
   
}

function borderCheck ( direction ) {
    const cloudDimension = 80;
    const map = {
        up: 'top',
        down: 'bottom',
        right: 'right',
        left: 'left'
    };
    const topLeftCoord = { 
        top: cloud.getBoundingClientRect().top, 
        left: cloud.getBoundingClientRect().left, 
        bottom: cloud.getBoundingClientRect().top, 
        right: cloud.getBoundingClientRect().left 
    };
    const viewport = { 
        top: 0, left: 0,
        bottom: window.innerHeight - cloudDimension,
        right: window.innerWidth - cloudDimension
    };

    if ( topLeftCoord[map[direction]] === viewport[map[direction]] ) {
        return true;
    }
}

function getCoord () {
    return { 
        top: cloud.getBoundingClientRect().top, 
        left: cloud.getBoundingClientRect().left, 
        bottom: cloud.getBoundingClientRect().top, 
        right: cloud.getBoundingClientRect().left 
    };
}

function face ( direction ) {
    switch( direction ) {
        case 'left':
            cloud.style.transform = 'scaleX(-1)';
            break;
        case 'right':
            cloud.style.transform = 'scaleX(1)';
            break;
    }
}