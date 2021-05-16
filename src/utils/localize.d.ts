import { lang } from "./enums";
export declare class Localize {
    private static language;
    private static _getFromJson;
    static localize: (lang: lang, text: any) => any;
}
