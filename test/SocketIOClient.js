let socketIOClient = SocketIOClient.getInstance("http://192.168.1.106:3000");



socketIOClient.on("connect_error", (error) => {
    console.error("连接错误:", error);
});

socketIOClient.on("error", (error) => {
    console.error("通用错误:", error);
});

socketIOClient.on("connect_timeout", () => {
    console.error("连接超时");
});

socketIOClient.connect();
System.sleep(3000);
console.log('是否连接成功：', socketIOClient.isConnected());

socketIOClient.on("message", function(data) {
    console.log(data);
});


socketIOClient.emit("message", {
    name: "DeekeScript",
    age: 3,
});
