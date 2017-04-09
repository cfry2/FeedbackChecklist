const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

var dev = process.argv[1] && process.argv[1].indexOf('webpack-dev-server') !== -1;

module.exports = {
    entry : './src/index.js',
    output : {
        path: path.join(__dirname, "/dist/") ,
        filename: 'bundle.js'
    },
    resolve :  {
        extensions : ['.js.jsx', '.jsx', '.js', '.scss', '.css'],
        modules: ['node_modules', path.resolve(__dirname, 'src')]

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
            new ExtractTextPlugin('style.css'),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: function() {
                        return [autoprefixer({browsers : ['ie >= 9', 'last 2 versions']})]
                    }
                }
            }),
        ]) : ([
            new ExtractTextPlugin('style.css'),
            new webpack.optimize.UglifyJsPlugin(),
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