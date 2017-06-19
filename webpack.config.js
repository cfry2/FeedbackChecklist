const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const WebpackAutoInject = require('webpack-auto-inject-version');

var dev = process.argv[1] && process.argv[1].indexOf('webpack-dev-server') !== -1;
//var dev = true;
let options = {
    entry : './src/index.js',
    output : {
        path: path.join(__dirname, "/dist/") ,
        filename: 'bundle.js'
    },
    resolve :  {
        extensions : ['.js.jsx', '.jsx', '.js', '.scss', '.css'],
        modules: ['node_modules', path.resolve(__dirname, 'src')]

    },
    node: {
        fs: 'empty'
    },
    devtool : 'source-map',
    module: {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                loader : 'babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-runtime'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('css-loader?-minimize!postcss-loader?!sass-loader?')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    devServer : {
        host: '0.0.0.0',
        publicPath : "/dist/"
    },
    plugins: (
        dev ? ([
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new Dotenv({
                path: '.env', 
                safe: false 
             }),
            new ExtractTextPlugin('style.css'),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: function() {
                        return [autoprefixer({browsers : ['ie >= 9', 'last 2 versions']})]
                    }
                }
            }),
        ]) : ([
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new WebpackAutoInject(),
            new ExtractTextPlugin('style.css'),
            new webpack.optimize.UglifyJsPlugin(),
            new Dotenv({
                path: '.env', 
                safe: false 
             }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: function() {
                        return [autoprefixer({browsers : ['ie >= 9', 'last 2 versions']})]
                    }
                }
            }),
        ])  
    )
}


module.exports = options