interface levels {
    info: string;
    error: string;
    debug: string;
}
export declare class Logy {
    static logger: Logy;
    private static filePath;
    static levels: levels;
    private constructor();
    private static emojes;
    private getCurrentTimeStamp;
    private static logedDataToFile;
    static log: (level: string, message: any) => void;
    private static writeFile;
}
export {};
