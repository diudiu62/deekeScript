declare global {
    class System {
        /**
         * 休眠
         * @param milliSecond 毫秒
         */
        public static sleep(milliSecond: number): void;

        /**
         * 释放内存
         */
        public static gc(): void;

        /**
         * 获取当前时间  yyyy-MM-dd HH:mm:ss.SSS 格式
         */
        public static time(): string;

        /**
         * 获取当前Activity
         */
        public static currentActivity(): string;

        /**
         * 获取当前包名
         */
        public static currentPackage(): string;

        /**
         * 将内容设置到剪切板中
         * @param text 剪切板内容
         */
        public static setClip(text: string): void;

        /**
         * 获取剪切板内容
         */
        public static getClip(): string;

        /**
         * 吐司
         * @param text 显示文本
         */
        public static toast(text: string): void;

        /**
         * 吐司（显示时间较长）
         * @param text 显示文本
         */
        public static toastLong(text: string): void;

        /**
         * 
         * @param activity 等待的Activity
         * @param period 每次时间间隔
         * @param timeout 等待的总时间
         */
        public static waitForActivity(activity: string, period: number, timeout: number): boolean;

        /**
         * 
         * @param activity 等待的PackageName的App启动
         * @param period 每次时间间隔
         * @param timeout 等待的总时间
         */
        public static waitForPackage(packageName: string, period: number, timeout: number): boolean;

        /**
         * 停止所有脚本
         */
        public static exit(): void;

        /**
         * 缓存清理
         */
        public static cleanUp(): void;

        /**
         * 获取智能话术token
         * @param key 智能话术key
         * @param secret 智能话术secret
         */
        public static AiSpeechToken(key: string, secret: string): string;

        /**
         * 生成窗口元素，使用App的上传日志，可以拿到文件
         */
        public static generateWindowElements(): void;

        /**
         * 获取接口返回的内容
         * @param key 
         * @param dataForm 
         * @param content 
         */
        public static getDataForm(key: string, dataForm: string, content: string): string | null;
    }
}

export { };
