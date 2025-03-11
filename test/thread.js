let obj = {
    run: function () {
        console.log('线程');
    }
}

new java.lang.Thread(new java.lang.Runnable(obj)).start();
for (let i = 0; i < 3; i++) {
    console.log(i);
    System.sleep(2000);
}
