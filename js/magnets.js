// @ts-check
(function (app) {

    app.magnets = function () {
        writeInstructions( 'Drag and drop to write your own poetry.', ['d', 'd']);
        initMagnets();
    };
    
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
    
    function initMagnets () {
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
        
        groups.forEach( (group, i) => {
            let top = (i * 60) + 100 + varySpacing(5);
            
            group.forEach( (magnet, j, eles) => {
                let prevLeft, prevWidth;
                
                top = top + varySpacing(5);
                
                if ( j === 0 ) {
                    prevLeft = 200 + varySpacing(100);
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

        new Draggable.Droppable( document.querySelectorAll( 'main' ), { draggable: '.magnet', droppable: '.magnet' } )
            .on( 'drag:start', (e) => { 
                console.log( 'start' ) 
                console.log( 'source bounding client', e.source.getBoundingClientRect().left )
            })
            .on('drag:move',  (e) => {
                e.source.style.display = 'none';
                console.log( 'ele bouding client', e.source.getBoundingClientRect() );
            })
            .on('droppable:over', (e) => console.log( 'over something' ) )
            .on('drag:stop', (e) => {
                e.source.style.display = 'block';
                console.log( 'source left', e.source.style.transform )
                console.log( 'source bounding client', e.source.getBoundingClientRect().left )
                console.log( 'ou est la mouse', e )
            });
    }

    function varySpacing ( range ) {
        return Math.floor( Math.random() * range );
    }

})(options);

/*

- make dude disappear/reappear
- not grow big
- track position

*/