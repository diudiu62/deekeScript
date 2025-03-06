let myTask = {
    intoApp() {
        //打开并进入App
    },

    backApp() {
        //退出当前App
    },

    task(){
        //任务代码
    },

    run() {
        try {
            this.intoApp();//打开App
            this.task();//执行任务
        } catch (e) {
            console.log(e);
            this.backApp();//出现异常，退出当前App
        }
    }
}

myTask.run();
