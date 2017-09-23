function randomizePalette () {
    const colorVars = [
        { key: 'dark', val: '--dark-color'},
        { key: 'lightest', val: '--lightest-color'},
        { key: 'light', val: '--light-color'},
        { key: 'medium', val: '--medium-color'},
        { key: 'highlight', val: '--highlight-color'},
    ];

    const palettes = [
        {
            medium: '#ff91bb',
            dark: '#a68dc4',
            highlight: '#7fffdf',
            light: '#f4fff9',
            lightest: '#ffffff',
         },
         {
            medium: '#93FF96',
            dark: '#86E7B8',
            highlight: '#B2FFA8',
            light: '#D0FFB7',
            lightest: '#F2F5DE',
         }
    ]; 
    const selectedPalette = palettes[Math.floor(Math.random() * (palettes.length))]; 
    
    colorVars.forEach( cssVar => {
        console.log( cssVar );
        console.log( selectedPalette );
        console.log( selectedPalette[cssVar.key] );
        document.documentElement.style.setProperty( cssVar.val, selectedPalette[cssVar.key] );
    });

}

randomizePalette();

function randomNum () {
  //The maximum is inclusive and the minimum is inclusive 
}

function Palette ( lightest, light, highlight, medium, dark ) {
    this.lightest = lightest;
    this.light = light;
    this.highlight = highlight;
    this.medium = medium;
    this.dark = dark;
}




// #86e7b8 
// #93ff96 
// #b2ffa8 
// #d0ffb7 
// #f2f5de

// #fae8eb 
// #f6caca 
// #e4c2c6 
// #ff4f79 
// #ffb49a 

// #67597a 
// #544e61 
// #6e8894 
// #85baa1 
// #ceeddb

// #b4edd2 
// #a0cfd3 
// #8d94ba 
// #9a7aa0 
// #87677b

// #a7bed3 
// #c6e2e9 
// #f1ffc4 
// #ffcaaf 
// #dab894
