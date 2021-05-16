export declare class Hash {
    private static salt;
    static encrypt: (text: string) => string;
    static compare(text: string, hash: string): boolean;
}
