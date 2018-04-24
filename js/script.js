Array.prototype.getRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
};


// using anime.js
// from docs: http://animejs.com/documentation/#morphing

const morphing = anime({
    targets: '.morph',
    points: [
      
      { value: `60 60, 130 60, 190 60, 190 130, 
                190 190, 130 190, 60 190, 60 130` }, 
      { value: `60 60, 130 60, 190 60, 190 130,
                190 190, 130 190, 60 190, 60 130` }, // starting square
   
      { value: `130 60, 130 60, 130 60, 190 190,
               190 190, 130 190, 60 190, 60 190` },
      { value: `130 60, 130 60, 130 60, 190 190,
               190 190, 130 190, 60 190, 60 190` }, // up triangle
      
      { value: `190 120, 190 120, 190 120, 60 190,
               60 190, 60 190, 60 60, 60 60` },
      { value: `190 120, 190 120, 190 120, 60 190,
               60 190, 60 190, 60 60, 60 60` }, // right triangle
      
      { value: `120 190, 120 190, 110 190, 60 190,
                60 190, 60 60, 120 60, 120 60` },
      { value: `120 190, 120 190, 110 190, 60 190,
                60 190, 60 60, 120 60, 120 60` }, // narrow rect
      
      { value: `190 190, 190 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` },
      { value: `190 190, 190 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` }, // expanding rect to sq
      
      { value: `160 190, 90 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` },
      { value: `160 190, 90 190, 110 190, 60 190,
                60 120, 60 60, 120 60, 190 60` }, // octo step 1
      
      { value: `160 190, 90 190, 60 160, 60 100,
                60 100, 60 60, 120 60, 190 60` }, // octo step 2
      
      { value: `160 190, 90 190, 60 160, 60 90,
                90 60, 100 60, 120 60, 190 60` }, // octo step 3
      
      { value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 90` }, // octo step 4
      
      { value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 160` },    
      { value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 160` },
      { value: `160 190, 90 190, 60 160, 60 90,
                90 60, 160 60, 190 90, 190 160` }, // octo step 5 - complete
      
      { value: `60 60, 130 60, 190 60, 190 130,
                190 190, 130 190, 60 190, 60 130` } // ending square
    ],
    easing: 'linear',
    duration: 8000,
    loop: true,
    autoplay: false
});

const options = document.querySelectorAll('input[type="checkbox"]');
options.forEach( btn => {
    btn.addEventListener('click', function () {
    switch (this.id) {
        case 'morph-logo':
            if (morphing.paused) {
                morphing.play();
            } else {
                morphing.reset();
                morphing.pause();
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

const toDecorate = document.querySelectorAll('.random-decor li');
const classes = [
    {used: 0, class: 'left-stars'},
    {used: 0, class: 'left-colons'},
    {used: 0, class: 'left-under'},
    {used: 0, class: 'right-colons'},
    {used: 0, class: 'right-arrows'},
    {used: 0, class: 'squiggles'},
    {used: 0, class: 'colons'},
    {used: 0, class: 'slashes'},
    {used: 0, class: 'equals'},
    {used: 0, class: 'squares'}
];
let uses = 0; 

toDecorate.forEach((li, i) => {
    const randomClass = classes.filter(item => item.used <= uses).getRandom();
    randomClass.used++;
    li.classList.add(randomClass.class);

    if (i % classes.length === 3) uses++;
});