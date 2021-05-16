import { lang } from "../../utils/enums";
import { Request } from "express";
export interface loginProf {
    username?: String;
    email?: String;
    password: String;
    lang?: lang;
}
export declare class LoginProfReq implements loginProf {
    username: String;
    password: String;
    email: String;
    language: lang;
    private request;
    private body;
    constructor(loginProfRequest: Request);
    check(): boolean;
}
