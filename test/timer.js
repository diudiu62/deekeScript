

function test_timeout() {
    console.log(333);
    setTimeout(() => {
        console.log(a, UiSelector());
    }, 2000);
}

function test_setInterval() {
    console.log(a);
    let i = 3;
    let t = setInterval(() => {
        console.log(a);
        if (i-- < 0) {
            clearInterval(t);
        }
    }, 2000);
}

let a = 123;
// test_timeout();
test_setInterval();
// console.log(clearInterval);

