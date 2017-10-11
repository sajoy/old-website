// @ts-check

const Dragg = Draggable.Draggable;

const quote = [
    `but`, `if`, `poetry`, `is`, `your`, `goal`, `, `, `you've`, `got`, `to`, `forget`, `all`, `about`, `punishments`, `and`, `all`, `about`, `rewards`, `and`, 
    `all`, `about`, `selfstyled`, `obligations`, `and`, `duties`, `and`, `responsibilities`, `etcetera`, `ad`, `infinitum`, `and`, `remember`, `one`, `thing`, `only`, `:`, 
    `that`, `it's`, `you`, `&mdash;`, `nobody`, `else`, `&mdash;`, `who`, `determine`, `your`, `destiny`, `and`, `decide`, `your`, `fate`, 
    `.`, `nobody`, `else`, `can`, `be`, `alive`, `for`, `you`, `;`, `nor`, `can`, `you`, `be`, `alive`, `for`, `anybody`, `else`, `.`, `Toms`, `can`, `be`, `Dicks`, `and`, 
    `Dicks`, `can`, `be`, `Harrys`, `, `, `but`, `none`, `of`, `them`, `can`, `ever`, 
    `be`, `you`, `.`, `there's`, `the`, `artist's`, `responsibility`, `;`, `and`, `the`, `most`, `awful`, 
    `responsibility`, `on`, `earth`, `.`, `if`, `you`, `can`, `take`, `it`, `, `, `take`, `it`, `&mdash;`, `and`, `be`, `.`, 
    `if`, `you`, `can't`, `, `, `cheer`, `up`, `, `, `and`, `go`, `about`, `other`, `people's`, `business`, `;`, `and`, `do`, `(`, 
    `or`,  `undo`,  `)`,  `till`,  `you`,  `drop`,  `.`,  `-`,  `e`,  `.`,  `e`,  `.`,  `cummings` 
];

quote.map( content => {
    let magnet = document.createElement( 'p' );
    magnet.classList.add( 'magnet' ); 
    magnet.innerText = content;
    return magnet;
}).forEach( (magnet, i, eles) => {
    let prevLeft, prevWidth;

    if ( i === 0 ) {
        prevLeft = 0;
        prevWidth = 0;
    } else {
        let prev = eles[i - 1];
        prevLeft = parseInt(prev.style.left);
        prevWidth = prev.getBoundingClientRect().width + 8;
    }

    magnet.style.left = `${prevLeft + prevWidth}px`;



    document.querySelector( 'main' ).appendChild( magnet );
});

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