global {
    var SocketIOClient: socketIOClient;
}

interface socketIOClient {
    /**
     * 获取socketIOClient实例
     */
    public getInstance(serverUrl: string): socketIOClient;
    /**
     * 连接socketIOServer
     */
    public connect(): void;

    /**
     * 断开socketIOServer
     */
    public disconnect(): void;

    /**
     * 是否已连接
     */
    public isConnected(): boolean;

    /**
     * 向服务器发送事件和数据
     * @param eventName  事件名称
     * @param data  数据
     */
    public emit(eventName: string, data: object): void;

    /**
     * 向服务器发送事件和数据
     * @param eventName 事件名称
     * @param data 数据
     * @param callback 服务器确认后的回调函数
     */
    public emit(eventName: string, data: object, callback: function): void;

    /**
     * 监听事件
     * @param eventName 
     * @param callback 
     */
    public on(eventName: string, callback: (data: any) => void): void;

    /**
  *  移除事件监听器
  * @param eventName 
  * @param callback 
  */
    public off(eventName: string, callback: (data: any) => void): void;
}

export { };
