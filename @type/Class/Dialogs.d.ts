declare global {
    class Dialogs {
        /**
         * 弹窗（App内运行）
         * @param title 标题
         * @param content 内容
         */
        public static show(title: string, content: string): void;

        /**
        * 弹窗（App内运行）
        * @param title 标题
        */
        public static show(title: string): void;

        /**
        * 确认弹窗（App内运行）
        * @param title 标题
        * @param content 内容
        */
        public static confirm(title: string, content: string, callback: (result: boolean) => void): void;

        /**
        * 输入弹窗（App内运行）
        * @param title 标题
        * @param content 内容
        */
        public static input(title: string): string;

        /**
        * 输入弹窗（App内运行）
        * @param title 标题
        * @param value 默认值
        */
        public static input(title: string, value: object): string;
    }
}

export { };
