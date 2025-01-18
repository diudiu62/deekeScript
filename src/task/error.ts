// import * as sourceMap from 'source-map';
// const sourceMap = require('source-map');
// const fs = require('fs');
import * as fs from 'fs';
import * as sourceMap from 'source-map';

// 创建一个 SourceMapConsumer 来解析 source map 文件
async function mapErrorToTSStack(file: string, lineNumber: number, columnNumber: number, error: string) {
    // 读取 source map 文件 (假设 app.js.map 与 app.js 文件位于同一目录)
    const sourceMapFile = file + '.map';
    const map = JSON.parse(fs.readFileSync(sourceMapFile, 'utf8'));
    const consumer = await new sourceMap.SourceMapConsumer(map);
    // 使用 SourceMapConsumer 查找 TypeScript 文件和行号
    const originalPosition = consumer.originalPositionFor({
        line: lineNumber,
        column: columnNumber
    });

    if (originalPosition.source) {
        // 将 JavaScript 堆栈转换为 TypeScript 堆栈
        return `at ${originalPosition.source}:${originalPosition.line}:${originalPosition.column}`;
    }

    // 返回转换后的堆栈信息
    return error;
}

// 使用转换函数
mapErrorToTSStack("script/task/test.js", 1, 661, 'TypeError: Cannot read properties of null (reading \'someMethod\')').then(tsStack => {
    console.log('Converted TypeScript Stack Trace:');
    console.log(tsStack);
});
