import { lang } from "../../utils/enums";
import { Request } from "express";
export interface createStudent {
    username: String;
    password: String;
    lang?: lang;
}
export declare class CreateStudentReq implements createStudent {
    username: String;
    password: String;
    name: String;
    email: String;
    language: lang;
    private request;
    private body;
    constructor(cStudentRequest: Request);
    check(): boolean;
}
