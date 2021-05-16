import { lang } from "../../utils/enums";
import { Request } from "express";
export interface getProfStudents {
    profUsername: String;
    courseCode: String;
    studentUserName: String;
    limit?: number;
    skip?: number;
    language: lang;
}
export declare class GetProfStudentReq implements getProfStudents {
    profUsername: String;
    courseCode: String;
    studentUserName: String;
    skip: number;
    limit: number;
    language: lang;
    private request;
    private body;
    constructor(gProfRequest: Request);
}
