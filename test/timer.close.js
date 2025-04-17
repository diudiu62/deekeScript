


function timers() {
    let i = 0;
    let timer = setInterval(() => {
        console.log(i++);
    }, 3000);
}

timers();

function task() {
    let i = 10;
    let tasks = setTimeout(() => {
        console.log(i++);
    }, 3000);
}

task();

function b() {
    Engines.closeAll();
}

System.sleep(7000);
b();
