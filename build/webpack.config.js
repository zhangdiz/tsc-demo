const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // 指定入口文件夹
    // 这里我们在src文件夹下创建一个index.ts
    entry: "./src/index.ts",
    // 指定输出文件名
    output: {
        filename: "main.js"
    },
    resolve: {
        // 自动解析一下拓展，当我们要引入src/index.ts的时候，只需要写src/index即可
        extensions: [".tsx", ".ts", ".js"]        
    },
    module: {
        // 配置以.ts/.tsx结尾的文件都用ts-loader解析
        // 这里我们用ts-loader，所以安装一下
        // npm install ts-loader -D
        rules: [
            {
                test:/\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    // 指定编译后是否生成source-map,这里判断如果是生产打包环境则不生产source-map
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    // 这里使用webpack-dev-server, 进行本地开发调试
    devServer: {
        contentBase: "./dist",
        stats:"errors-only",
        compress: false,
        host: "localhost",
        port: 8080
    },

    // 这里用到两个插件，记得安装
    // npm install html-webpack-plugin clean-webpack-plugin -D
    plugins: [
        // 这里在编译之前先删除dist文件夹
        new CleanWebpackPlugin({
            CleanOnceBeforeBuildPatterns: ["./dist"]
        }),
        // 这里我们制定编译需要的用模板，模板文件是./src/template/index.html
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
}