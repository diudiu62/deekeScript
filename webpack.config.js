const path = require('path');
const glob = require('glob');
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
        minimize: false,  // 关闭代码压缩  开启后，代码行数会减少
    },
    plugins: [
        new WebpackObfuscator({
            compact: false,  //代码压缩  不建议开启，否则代码错误很难排查
            rotateStringArray: true,  // 启用字符串数组混淆
            controlFlowFlattening: true,  // 控制流扁平化
            deadCodeInjection: true,  // 注入死代码
            stringArray: true,  // 启用字符串数组化   不能启用，否则rhino无法处理
            stringArrayThreshold: 0.75,  // 配置字符串数组化的阈值
            disableConsoleOutput: false,  // 禁用 console 输出
            sourceMap: true,  // 启用生成 sourcemap
        }), // 指定要混淆的文件
    ]
};
