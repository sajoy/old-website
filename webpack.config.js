const path = require('path');

module.exports = {
    watch: true,
    entry: {
        indexPage: './src/js/index.js',
        workPage: './src/js/work.js'
    },
    output: {
        path: path.resolve(__dirname, './js'),
        filename: '[name].js'
    },
};