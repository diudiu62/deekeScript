function test() {
    let obj: any = null;
    // 访问 null 时，会触发 TypeError
    console.log(obj.someMethod());  // TypeError: Cannot read property 'someMethod' of null
}

test();