const app = {
    init: function () {
        this.setAnimation();
        this.handleButtons();
    },
    setAnimation: function () {
        // using anime.js
        // from docs: http://animejs.com/documentation/#morphing

        this.morphing = anime({
            targets: '.morph',
            points: [

                {
                    value: `60 60, 130 60, 190 60, 190 130, 
                190 190, 130 190, 60 190, 60 130` },
                {
                    value: `60 60, 130 60, 190 60, 190 130,
                190 190, 130 190, 60 190, 60 130` }, // starting square

                {
                    value: `130 60, 130 60, 130 60, 190 190,
               190 190, 130 190, 60 190, 60 190` },
                {
                    value: `130 60, 130 60, 130 60, 190 190,
               190 190, 130 190, 60 190, 60 190` }, // up triangle

                {
                    value: `190 120, 190 120, 190 120, 60 190,
               60 190, 60 190, 60 60, 60 60` },
                {
                    value: `190 120, 190 120, 190 120, 60 190,
               60 190, 60 190, 60 60, 60 60` }, // right triangle

                {
                    value: `120 190, 120 190, 110 190, 60 190,
                60 190, 60 60, 120 60, 120 60` },
                {
                    value: `120 190, 120 190, 110 190, 60 190,
                60 190, 60 60, 120 60, 120 60` }, // narrow rect

                {
                    value: `190 190, 190 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` },
                {
                    value: `190 190, 190 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` }, // expanding rect to sq

                {
                    value: `160 190, 90 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` },
                {
                    value: `160 190, 90 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` }, // octo step 1

                {
                    value: `160 190, 90 190, 60 160, 60 100,
                60 100, 60 60, 120 60, 190 60` }, // octo step 2

                {
                    value: `160 190, 90 190, 60 160, 60 90,
                90 60, 100 60, 120 60, 190 60` }, // octo step 3

                {
                    value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 90` }, // octo step 4

                {
                    value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 160` },
                {
                    value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 160` },
                {
                    value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 160` }, // octo step 5 - complete

                {
                    value: `60 60, 130 60, 190 60, 190 130,
                190 190, 130 190, 60 190, 60 130` } // ending square
            ],
            easing: 'linear',
            duration: 8000,
            loop: true,
            autoplay: false
        });

    },
    handleButtons: function () {
        const options = document.querySelectorAll('input[type="checkbox"]');
        options.forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log(this, e);
                switch (e.target.id) {
                    case 'morph-logo':
                        if (this.morphing.paused) {
                            this.morphing.play();
                        } else {
                            this.morphing.reset();
                            this.morphing.pause();
                        }
                        break;
                    case 'change-color':
                        document.body.classList.toggle('new-color');

                        const root = document.documentElement;
                        const color = getComputedStyle(root).getPropertyValue("--text-color");
                        root.style.setProperty('--text-color', color !== 'white' ? 'white' : 'rgb(37, 37, 37)');

                        const square = document.querySelector('svg .morph');
                        const stroke = square.getAttribute('stroke');
                        square.setAttribute('stroke', stroke === '#000' ? '#FFF' : '#000');

                        break;
                    case 'cats':
                        const midnight = document.querySelector('#logo img');
                        midnight.classList.toggle('yawn');
                        break;
                }
            });
        });
    }
};

export default app;