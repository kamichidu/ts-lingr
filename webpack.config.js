const webpack= require('webpack');
const path= require('path');

module.exports= {
    entry: {
        app: path.join(__dirname, 'src', 'main', 'js', 'app.ts'),
    },
    output: {
        path: path.join(__dirname, 'dist', 'assets', 'js'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.js', '.ts', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
    module: {
        loaders: [
            { test: /\.ts$/,  loaders: ['babel', 'ts'], exclude: /node_modules/ },
            { test: /\.vue$/, loaders: ['vue'],         exclude: /node_modules/ },
        ],
    },
    plugins: [
    ],
    vue: {
    },
    devtool: '#source-map',
};
