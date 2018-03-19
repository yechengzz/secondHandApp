const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BaseWebpackConfig = require('./webpack.base.config')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('./config')

const prodWebpackConfig = merge(BaseWebpackConfig,{
    module: {
        rules: config.styleLoaders({
            sourceMap: true,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: path.posix.join('assets','js/[name].[chunkhash].js'),
        chunkFilename: path.posix.join('assets','js/[id].[chunkhash].js')
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        /*new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': 'production'
            }
        }),*/
        new ExtractTextPlugin({
            filename: path.posix.join('assets','css/[name].[contenthash].css'),
            allChunks: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
                map: {
                    inline: false
                }
            }
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks (module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            async: 'vendor-async',
            children: true,
            minChunks: 3
        })
    ]
})

module.exports = prodWebpackConfig