import { lang } from "../../utils/enums";
import { Request } from "express";
export interface getStudent {
    username: String;
    name: String;
    email: String;
    limit?: number;
    skip?: number;
    language: lang;
}
export declare class GetStudentReq implements getStudent {
    username: String;
    name: String;
    email: String;
    skip: number;
    limit: number;
    language: lang;
    private request;
    private body;
    constructor(gStudentRequest: Request);
    check(): boolean;
}
