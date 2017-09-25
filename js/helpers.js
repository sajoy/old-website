const options = {};

function randNum ( min, max ) {
    return num = Math.floor((Math.random() * (max - min + 1)) + min);
}

function writeInstructions( title, textArray ) {
    const instructions = document.getElementById( 'instructions' );
    instructions.title = title;
    textArray.forEach( key => {
        let pre = document.createElement( 'pre' );
        pre.innerText = key;
        instructions.appendChild( pre );
    })
}