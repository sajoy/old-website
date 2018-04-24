Array.prototype.getRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
};

export function decorate () {
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
}