var {
    VueLoaderPlugin
} = require('vue-loader');

var path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader" 
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}