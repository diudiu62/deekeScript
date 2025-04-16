let i = 0;
let timer = setInterval(() => {
    console.log(i++);
}, 3000);

let b = {
    run: function () {
        let i = 0;
        let timer = setInterval(() => {
            console.log("线程：" + i++);
        }, 3000);
    } 
}

new java.lang.Thread(new java.lang.Runnable(b)).start();


// setTimeout(() => {
//     console.log('停止');
// }, 3000);
console.log("timer", timer);
System.sleep(7000);


Engines.closeOther();



