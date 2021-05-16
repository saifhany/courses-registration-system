import { lang } from "../../utils/enums";
import { Request } from "express";
export interface login {
    username?: String;
    email?: String;
    password: String;
    lang?: lang;
}
export declare class LoginReq implements login {
    username: String;
    password: String;
    email: String;
    language: lang;
    private request;
    private body;
    constructor(loginRequest: Request);
    check(): boolean;
}
