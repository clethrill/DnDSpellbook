var webpack = require("webpack");

module.exports = {

    context: __dirname + "/src",
    entry: "./entry.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/bundle"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "react",
                        "es2015"
                    ]
                }
            }
        ]
    }
};
