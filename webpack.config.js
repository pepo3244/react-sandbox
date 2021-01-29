const path = require("path");
const outputPath = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode: "production",
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        path: outputPath,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,// .jsxも対象に含める
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        contentBase: outputPath,
        open: true,
    }
};
