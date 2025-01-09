const sourceMap = require('source-map');
const fs = require('fs');

// 模拟手机端返回的错误堆栈
const errorStack = `
TypeError: 42.foo is not a function
    at Object.setName (C:\Users\Administrator\Desktop\Typescript\script\index.js:1:100)
    at 787 (C:\Users\Administrator\Desktop\Typescript\script\index.js:1:167)
    at o (C:\Users\Administrator\Desktop\Typescript\script\index.js:1:303)
    at C:\Users\Administrator\Desktop\Typescript\script\index.js:1:329
    at Object.<anonymous> (C:\Users\Administrator\Desktop\Typescript\script\index.js:1:337)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
`;

// 创建一个 SourceMapConsumer 来解析 source map 文件
async function mapErrorToTSStack(errorStack) {
    // 读取 source map 文件 (假设 app.js.map 与 app.js 文件位于同一目录)
    const sourceMapFile = 'script/index.js.map';
    const map = JSON.parse(fs.readFileSync(sourceMapFile, 'utf8'));

    const consumer = await new sourceMap.SourceMapConsumer(map);

    // 获取堆栈信息并转换为 TypeScript 错误
    const lines = errorStack.split('\n');
    const tsStack = lines.map(line => {
        // 检查堆栈行是否是代码错误信息
        const match = line.match(/at (.*?):(\d+):(\d+)/);
        if (match) {
            const file = match[1];
            const lineNumber = parseInt(match[2], 10);
            const columnNumber = parseInt(match[3], 10);

            // 使用 SourceMapConsumer 查找 TypeScript 文件和行号
            const originalPosition = consumer.originalPositionFor({
                line: lineNumber,
                column: columnNumber
            });

            if (originalPosition.source) {
                // 将 JavaScript 堆栈转换为 TypeScript 堆栈
                return `at ${originalPosition.source}:${originalPosition.line}:${originalPosition.column}`;
            }
        }
        return line;
    });

    // 返回转换后的堆栈信息
    return tsStack.join('\n');
}

// 使用转换函数
mapErrorToTSStack(errorStack).then(tsStack => {
    console.log('Converted TypeScript Stack Trace:');
    console.log(tsStack);
});
