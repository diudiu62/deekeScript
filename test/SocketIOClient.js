let socketIOClient = SocketIOClient.getInstance("http://192.168.0.111:3000");

socketIOClient.on("connect_error", (error) => {
    console.error("连接错误:", error);
});

socketIOClient.on("error", (error) => {
    console.error("通用错误:", error);
});

socketIOClient.on("connect_timeout", () => {
    console.error("连接超时");
});


socketIOClient.on("connect", function () {
    console.log('是否连接成功：', socketIOClient.isConnected());
    socketIOClient.on("message", function (data) {
        console.log('服务端发来的消息：', data);
    });

    let str = JSON.stringify({
        name: "DeekeScript",
        age: 3,
        other: {
            sex: ["男"]
        }
    });
    socketIOClient.emit("message", str, function (data) {
        console.log('确认参数', data);
    });
});

socketIOClient.connect();

while (true) {
    System.sleep(1000);
    console.log('防止脚本终止');
}
