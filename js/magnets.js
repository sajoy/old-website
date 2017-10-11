// @ts-check

const Dragg = Draggable.Draggable;

const quote = [
    `but`, `if`, `poetry`, `is`, `your`, `goal`, `, `, `you've`, `got`, `to`, `forget`, `all`, `about`, `punishments`, `and`, `all`, `about`, `rewards`, `and`, 
    `all`, `about`, `selfstyled`, `obligations`, `and`, `duties`, `and`, `responsibilities`, `etcetera`, `ad`, `infinitum`, `and`, `remember`, `one`, `thing`, `only`, `:`, 
    `that`, `it's`, `you`, `—`, `nobody`, `else`, `—`, `who`, `determine`, `your`, `destiny`, `and`, `decide`, `your`, `fate`, 
    `.`, `nobody`, `else`, `can`, `be`, `alive`, `for`, `you`, `;`, `nor`, `can`, `you`, `be`, `alive`, `for`, `anybody`, `else`, `.`, `Toms`, `can`, `be`, `Dicks`, `and`, 
    `Dicks`, `can`, `be`, `Harrys`, `, `, `but`, `none`, `of`, `them`, `can`, `ever`, 
    `be`, `you`, `.`, `there's`, `the`, `artist's`, `responsibility`, `;`, `and`, `the`, `most`, `awful`, 
    `responsibility`, `on`, `earth`, `.`, `if`, `you`, `can`, `take`, `it`, `, `, `take`, `it`, `—`, `and`, `be`, `.`, 
    `if`, `you`, `can't`, `, `, `cheer`, `up`, `, `, `and`, `go`, `about`, `other`, `people's`, `business`, `;`, `and`, `do`, `(`, 
    `or`,  `undo`,  `)`,  `till`,  `you`,  `drop`,  `.`,  `-`,  `e`,  `.`,  `e`,  `.`,  `cummings` 
];

console.log( 'l', quote.length);
const magnetEles = quote.map( content => {
    let magnet = document.createElement( 'p' );
    magnet.classList.add( 'magnet' ); 
    magnet.innerText = content;
    return magnet;
});

const groups = [];
while ( magnetEles.length > 0 ) {
    groups.push( magnetEles.splice(0,16) );
}

groups.forEach( (group, i) => { // iterates over 12 groups
    let top = (i * 60) + 30;

    group.forEach( (magnet, j, eles) => {
        console.log( `inside group ${i}`, magnet );
        let prevLeft, prevWidth;
        
        console.log( 'j is', j );
        if ( j === 0 ) {
            prevLeft = 200;
            prevWidth = 0;
        } else {
            let prev = eles[j - 1];
            let prevDimensions = prev.getBoundingClientRect();
            prevLeft = parseInt(prev.style.left);
            prevWidth = prevDimensions.width + 8;   
        }
        
        magnet.style.left = `${prevLeft + prevWidth}px`;
        magnet.style.top = `${top}px`;
        
        document.querySelector( 'main' ).appendChild( magnet );
    });
});

/*
    strings of words
    elements
    arrays of 12 words
*/


new Dragg( document.querySelectorAll( 'main' ), { draggable: '.magnet' } )
    .on( 'drag:start', () => console.log( 'start' ) )
    .on('drag:move',  (e) => {
        console.log( e.source.style.display = 'none' );
        console.log( e.source.getBoundingClientRect() );
    })
    .on('drag:stop',  () => console.log('drag:stop'));

/*

- position magnets properly
  - so on move they don't collapse into each other
- turn off highlighting
- make dude disappear
- not grow big
- track position

*/