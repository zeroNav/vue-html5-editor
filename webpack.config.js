var path = require("path")
var package = require("./package.json")
var webpack = require("webpack")
module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "vue-html5-editor.js",
        libraryTarget: "umd",
        library: "VueHtml5Editor"
    },
    module: {
        loaders: [
            {
                test: /\.css$/, 
                loader: "css!less"
            },
            {
                test: /(\.html)$/,
                loader: "html-loader"
            },
            {
                test: /\.(jpg)|(png)|(gif)$/,
                loader: "url-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','stage-3'],
                    plugins: ['transform-runtime']
                },
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugin("Vue-html5-editor " + package.version + "\nhttps://github.com/PeakTai/vue-html5-editor"),
        new webpack.DefinePlugin({
            ROOT: JSON.stringify(path.normalize(__dirname)),
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(package.version),
        })
    ],
    debug: false,
    vue: {
        loaders: {
            js: 'babel',
            css: 'css!less',
            less: 'css!less'
        }
    },
    babel: {
        presets: ['es2015','stage-3'],
        plugins: ['transform-runtime']
    },    
    resolve: {
        extensions: ['','.js','.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}
