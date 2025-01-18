function test() {
    let sssss: any = {};
    // 访问 null 时，会触发 TypeError
    sssss.someMethod();  // TypeError: Cannot read property 'someMethod' of null
}

test();