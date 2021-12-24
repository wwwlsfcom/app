// The path to the CesiumJS source code
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {presets: ['@babel/env']}
            },
            {
                test: /\.tsx$/i,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: ['url-loader']
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx'],
        alias: {
            cesium: path.resolve(__dirname, cesiumSource)
        },
        // mainFiles: ['module', 'main', 'Cesium']
    },
    output: {
        path: 'c:/target/qyj',
        filename: "bundle.js",
        clean: true
    },
    devServer: {
        port: 80,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: 'body',
            // favicon: "./src/assets/logo_qyj.png"
        }),
        // Copy Cesium Assets, Widgets, and Workers to a static directory
        new CopyWebpackPlugin({
            patterns: [
                {from: path.join(cesiumSource, cesiumWorkers), to: 'Workers'},
                {from: path.join(cesiumSource, 'Assets'), to: 'Assets'},
                {from: path.join(cesiumSource, 'Widgets'), to: 'Widgets'}
            ]
        }),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('/')
        })
    ]
};