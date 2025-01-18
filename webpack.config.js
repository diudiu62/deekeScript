const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const scriptDir = 'script';
const WebpackObfuscator = require('webpack-obfuscator');//代码混淆

module.exports = {
    devtool: 'source-map',
    entry: {
        index: './src/index.ts',  // 主入口文件
        // 动态获取 src/task 下所有的 .ts 文件
        ...glob.sync('./src/**/*.ts').reduce((entries, file) => {
            // 使用文件路径作为输出文件的键
            const name = path.relative('./src', file).replace('.ts', '');
            entries[name] = './' + file;
            return entries;
        }, {}),
    },
    output: {
        // 动态计算输出路径，保证文件夹结构与入口目录一致
        filename: (pathData) => {
            // 获取入口文件的相对路径，去掉 .ts 后缀
            const relativePath = pathData.chunk.name;

            // 根据相对路径生成对应的输出路径
            return `${relativePath}.js`;  // 输出结构与入口文件相同
        },
        path: path.resolve(__dirname, scriptDir),
    },
    resolve: {
        extensions: ['.ts', '.js'], // 解析扩展名
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', // 使用 ts-loader 编译 TypeScript
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,  // 启用代码压缩
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: true,  // 启用压缩
                    mangle: true,    // 启用混淆
                    output: {
                        comments: false, // 去掉注释
                    },
                },
            }),
        ],
    },
    plugins: [
        new WebpackObfuscator({
            rotateStringArray: true,  // 启用字符串数组混淆
            controlFlowFlattening: true,  // 控制流扁平化
            deadCodeInjection: true,  // 注入死代码
            stringArray: true,  // 启用字符串数组化
            stringArrayThreshold: 0.75,  // 配置字符串数组化的阈值
            disableConsoleOutput: true,  // 禁用 console 输出
          }), // 指定要混淆的文件
    ]
};
