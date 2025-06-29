global {
    var KeyBoards: KeyBoards;
}

interface KeyBoards {
    /**
     * DeekeScript输入法是否启用（未设置为默认，也返回true，但是此时不能输入和删除）
     */
    public isEnabled(): boolean;

    /**
     * 判断DeekeScript输入法是否设置为默认，是的话，则可以使用输入和删除方法
     */
    public canInput():boolean;

    /**
     * 往文本框追加字符串
     */
    public input(str: string): boolean;

    /**
     * 删除文本框最后一个字符
     */
    public delete():boolean;
}

export { };
