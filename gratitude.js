window.onload = function () {
    var container = document.getElementById( 'gratitude' ),
    reminders = ['you rock.', 'call your loved ones.', 'keep your chin up.', 'deep breath, relax.', 'everything is temporary.', 'your smile is awesome.', 'failing > not trying.'],
    colors = [ 'rgba( 280, 0, 100, .8 )', 'rgba( 280, 200, 10, .8 )', 'rgba( 60, 240, 70, .8 )', 'rgba( 0, 100, 200, .8 )', 'rgba( 200, 90, 200, .8 )' ];

    document.getElementById( 'thanks' ).addEventListener( 'click', () => {
        container.classList.add( 'showit' );
        container.style.backgroundColor = colors[ Math.floor( Math.random(1) * 4 ) ];
        setTimeout( () => { container.style.opacity = 1; } );

        document.getElementById( 'reminder' ).innerHTML = reminders[ Math.floor( Math.random(1) * 7 ) ];

        document.getElementById( 'close' ).addEventListener( 'click', () => {
            container.style.opacity = 0;
            setTimeout( () => { container.classList.remove( 'showit' ); }, 500 );
        });

    });
}
