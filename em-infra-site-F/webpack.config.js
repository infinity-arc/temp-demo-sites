const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/entry.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: './dist' },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
            { test: /\.md$/, use: [{ loader: "html-loader" }, { loader: "markdown-loader", options: {} }] },
            { test: /\.(html)$/, use: [{ loader: 'html-loader', options: { attrs: [':data-src'] } }, { loader: 'markup-inline-loader', options: { attrs: [':data-src'] } }] },
            { test: /\.exec\.js$/, use: [{ loader: 'script-loader', options: { sourceMap: true, }, }] }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new ManifestPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: true,
            NODE_PATH: './'
        })
    ],
};