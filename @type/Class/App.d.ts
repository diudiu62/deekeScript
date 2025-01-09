declare global {
    class App {
        /**
         * 获取当前包名
         */
        public static currentPackageName(): string;

        /**
         * 获取当前版本号
         */
        public static currentVersionCode(): number;

        /**
         * 获取当前版本名称
         */
        public static currentVersionName(): string;

        /**
         * 获取包信息
         */
        public static packageInfo(): any;//这里是返回的PackageInfo（Android对象）

        /**
         * 创建一个Intent对象
         * @param i Intent对象
         */
        public static intent(i: Intent): Intent;

        /**
         * 调整到某个Activity
         * @param uri 跳转的uri
         */
        public static gotoIntent(uri: string): void;

        /**
         * 启动Activity
         * @param intent Intent对象
         */
        public static startActivity(intent: Intent): void;

        /**
         * 返回到App
         */
        public static backApp(): void;

        /**
         * 启动服务
         * @param service Intent对象
         */
        public static startService(service: Intent): any;//这里的参数和返回都是ComponentName（Android对象）

        /**
         * 发送广播
         * @param intent Intent对象
         */
        public static sendBroadcast(intent: Intent): void;

        /**
         * 通过包名，打开某个App
         * @param packageName 包名
         */
        public static launch(packageName: string): void;

        /**
         * 通知
         * @param title 标题
         * @param content 内容
         */
        public static notifySuccess(title: string, content: string): void;

        /**
         * 通过包名，获取某个App的版本名称
         * @param packageName 包名
         */
        public static getAppVersionName(packageName: string): string;

        /**
         * 通过包名，获取某个App版本号
         * @param packageName 包名
         */
        public static getAppVersionCode(packageName: string): number;

        /**
         * 通过包名，进入某个App设置界面
         * @param packageName 包名
         */
        public static openAppSettings(packageName: string): void;
    }
}

export { };
