

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(Device.height());
        resolve('成功');
    }, 1000);
});

promise.then(resolve => {
    console.log(resolve);//成功
}, reject => {
    console.log(reject);
});
