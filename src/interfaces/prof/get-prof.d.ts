import { lang } from "../../utils/enums";
import { Request } from "express";
export interface getProf {
    username: String;
    name: String;
    email: String;
    limit?: number;
    skip?: number;
    language: lang;
}
export declare class GetProftReq implements getProf {
    username: String;
    name: String;
    email: String;
    skip: number;
    limit: number;
    language: lang;
    private request;
    private body;
    constructor(gProfRequest: Request);
    check(): boolean;
}
