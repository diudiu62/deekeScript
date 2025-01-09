let my = {
    name: 1,
    getName() {
        return this.name;
    },

    setName(name: number) {
        let x: any = 42;

         x.foo();  // 虽然 `x` 没有 `foo` 方法，但 TypeScript 不会报错
        return this.name;
    }
}
console.log("name = " + my.getName());
console.log(my.setName(0));
console.log(my.setName(1));
