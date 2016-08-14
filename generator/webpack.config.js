const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        './scripts/main'
    ],
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    }
};