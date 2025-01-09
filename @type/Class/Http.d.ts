declare global {
    class Http {
        /**
         * post请求  {"Content-Type":"application/json"}
         * @param url 请求地址
         * @param json 请求内容，请使用JOSN.parse()将对象处理成字符串
         */
        public static post(url: string, json: object): string;

        /**
         * 
         * @param url 请求地址
         * @param json 请求内容
         * @param headers 请求头n的请求头，如：{"Content-Type":"application/json"}
         */
        public static postHeaders(url: string, json: string, headers: object): string | null;

        /**
         * get请求
         * @param url 请求地址
         */
        public static get(url: string): string;

        /**
         * 带请求头的get请求
         * @param url 请求地址
         * @param headers 请求头
         */
        public static getHeaders(url: string, headers: object): string | null;

        //下面的方法，暂时还没使用过
        // public static postFile(url: string, files: string[], params: object, httpCallback: {
        //     success: (response: object) => void,
        //     error: (response: object) => void
        // }): boolean;
    }
}

export { };
