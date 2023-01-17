const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        form: './src/form.js',
        config: './src/config.js',
        // loadJson: './src/loadJson.js',
        weatherImages: './src/weatherImages.js',
    },

    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather App',
            template: './src/index.html',
            favicon: './src/assets/favicon.ico'
        }),
        // new CircularDependencyPlugin({
        //     // exclude detection of files based on a RegExp
        //     exclude: /a\.js|node_modules/,
        //     // include: /dir/,
        //     // add errors to webpack instead of warnings
        //     failOnError: true,
        //     // allow import cycles that include an asyncronous import,
        //     // e.g. via import(/* webpackMode: "weak" */ './file.js')
        //     allowAsyncCycles: false,
        //     // set the current working directory for displaying module paths
        //     cwd: process.cwd(),
        //     onStart({ compilation }) {
        //         console.log('start detecting webpack modules cycles');
        //     },
        //     onDetected({ module: webpackModuleRecord, paths, compilation }) {
        //         compilation.errors.push(new Error(paths.join(' -> ')))
        //     },
        //     onEnd({ compilation }) {
        //         console.log('end detecting webpack modules cycles');
        //     },
        // })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif|ico)/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|odt|ttf|eot|otf)/i,
                type: 'asset/resource'
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
        sideEffects: false,
    },
};
