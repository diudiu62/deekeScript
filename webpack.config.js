const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
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
        path: path.resolve(__dirname, 'dist'),
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
            {
                test: /\.(png)$/i,  // 匹配 PNG 图片
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // 保留源目录结构并输出到 dist 文件夹
                            name: (resourcePath) => {
                                // 提取相对路径，移除 src 目录，保留其他目录结构
                                const relativePath = path.relative(path.resolve(__dirname, 'src'), resourcePath);
                                return `dist/${relativePath}`;
                            },
                        },
                    },
                ],
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
                },
            }),
        ],
    },
};
