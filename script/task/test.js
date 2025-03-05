"use strict";
var arr = [1, 2, 3];
// 自动抛出 RangeError，因为数组索引越界 192.168.1.3:8088
var value = arr[-1]; // TypeScript 会提示 `undefined`，但是在运行时会引发错误
function test() {
    var obj = {};
    // 访问 null 时，会触发 TypeError
    console.log(obj.someMethod()); // TypeError: Cannot read property 'someMethod' of null
}
console.log(arr);
test();
//# sourceMappingURL=test.js.map