declare global {
    class Encrypt {
        /**
         * md5加密
         * @param input
         */
        public static md5(input: string): string;

        /**
         * sha1加密
         * @param input 
         */
        public static sha1(input: string): string;

        /**
         * sha256加密
         * @param input 
         */
        public static sha256(input: string): string;

        /**
         * base64 encode
         * @param input 
         */
        public static base64Encode(input: string): string;

        /**
         * base64 decode
         * @param input 
         */
        public static base64Decode(input: string): string;

        /**
         * 生成iv
         */
        public static generateIv(): string;

        /**
         * aescbc加密
         * @param key 
         * @param iv 
         * @param input 
         */
        public static aesCbcEncrypt(key: string, iv: string, input: string): string;

        /**
         * aescbc解密
         * @param key 
         * @param iv 
         * @param input 
         */
        public static aesCbcDecrypt(key: string, iv: string, input: string): string;
    }
}

export { };
