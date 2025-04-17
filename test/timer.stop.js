
let obj = {
    run: function () {
        setInterval(() => {
            console.log('线程');
        }, 3000);
    }
}

new java.lang.Thread(new java.lang.Runnable(obj)).start();


setInterval(() => {
    console.log('当前线程1');
}, 3000);


setInterval(() => {
    console.log('当前线程2');
}, 3000);

System.sleep(7000);
Engines.closeOther();
