window.onload = function () {
    var container = document.getElementById( 'overlay' ),
    menu = document.getElementById( 'menu' ),
    reminder = document.getElementById( 'gratitude' ),
    reminders = ['you rock.', 'call your loved ones.', 'keep your chin up.', 'deep breath, relax.', 'everything is temporary.', 'your smile is awesome.', 'failing > not trying.'],
    colors = [ 'rgba( 280, 0, 100, .8 )', 'rgba( 280, 200, 10, .8 )', 'rgba( 60, 240, 70, .8 )', 'rgba( 0, 100, 200, .8 )', 'rgba( 200, 90, 200, .8 )' ],
    targets = ['thanks', 'nav'];

    targets.forEach( target => {
        var thanks = target == 'thanks',
        ele = thanks ? reminder : menu;
        if ( document.getElementById( target ) ) {    
            document.getElementById( target ).addEventListener( 'click', () => {
                toggle( ele, thanks );
            });
        }
    })

    function toggle ( ele, thanks ) {
        container.classList.add( 'showit' );
        ele.classList.add( 'showit' );
        container.style.backgroundColor = colors[ Math.floor( Math.random(1) * 4 ) ];

        setTimeout( () => {
            container.style.opacity = 1;
            ele.style.opacity = 1;
        });

        if ( thanks ) {
            document.getElementById( 'reminder' ).innerHTML = reminders[ Math.floor( Math.random(1) * 7 ) ];
        }

        document.getElementById( 'close' ).addEventListener( 'click', () => {
            container.style.opacity = 0;
            ele.style.opacity = 0;

            setTimeout( () => {
                container.classList.remove( 'showit' );
                ele.classList.remove( 'showit' );
            }, 500 );
        });
    }
}
