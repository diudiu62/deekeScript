// TypeScript 类型定义文件，用于给 Rhino 的 console 函数提供代码提示

declare global {
    // Rhino 中的 console 对象
    var console: Console;
}

interface Console {
    /**
     * 记录普通日志信息
     * @param message 要记录的消息
     */
    log(...message: any[]): void;

    /**
     * 记录警告信息
     * @param message 要记录的警告消息
     */
    warn(...message: any[]): void;

    /**
     * 记录错误信息
     * @param message 要记录的错误消息
     */
    error(...message: any[]): void;

    /**
     * 记录信息，通常用于调试目的
     * @param message 要记录的信息
     */
    info(...message: any[]): void;

    /**
     * 记录调试信息
     * @param message 要记录的调试信息
     */
    debug(...message: any[]): void;

    /**
     * 打印堆栈追踪
     * @param message 堆栈追踪信息
     */
    trace(...message: any[]): void;
}

export { };
