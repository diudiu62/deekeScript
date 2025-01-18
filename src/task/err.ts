// let { mapErrorToTSStack } = require('./error');

import { mapErrorToTSStack } from './error';

// 使用转换函数
mapErrorToTSStack("script/task/test.js", 5, 21, 'TypeError: Cannot read properties of null (reading \'someMethod\')').then(tsStack => {
    console.log('Converted TypeScript Stack Trace:');
    console.log(tsStack);
});
