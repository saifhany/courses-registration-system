import { lang } from '../../utils/enums';
import { Request } from "express";
export interface createProf {
    username: String;
    password: String;
    type: any;
    lang?: lang;
}
export declare class CreateProfReq implements createProf {
    username: String;
    password: String;
    name: String;
    email: String;
    type: any;
    language: lang;
    private request;
    private body;
    constructor(cProfRequest: Request);
    check(): boolean;
}
