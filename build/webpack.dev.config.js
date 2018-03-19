const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const BaseWebpackConfig = require('./webpack.base.config')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const config = require('./config')

const devWebpackConfig = merge(BaseWebpackConfig,{
    module: {
        rules: config.styleLoaders({
            sourceMap: true,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: 'eval-source-map',
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: "localhost",
        port: 5555,
        open: true,
        overlay: { warnings: false, errors: true },
        publicPath: "/",
        proxy: {},
        quiet: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
       /* new webpack.DefinePlugin({
            'process.env': 'development'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CleanWebpackPlugin(['./dist']),
        new FriendlyErrorsPlugin({
            onErrors: (severity,errors)=>{
                if(severity !== 'error') return
                const error = errors[0];
                notifier.notify({
                    title: 'webpack error',
                    message: severity+ ': '+ error.name,
                    subtitle: error.file && error.file.split('!').pop() || '',
                    icon: ''
                })
            }
        })
    ]
})

module.exports = devWebpackConfig