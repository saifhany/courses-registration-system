import { lang } from "../../utils/enums";
import { Request } from "express";
export interface StudentCourse {
    code: String;
    lang?: lang;
}
export declare class StudentCourseReq implements StudentCourse {
    code: String;
    language: lang;
    private request;
    private body;
    constructor(cCourseRequest: Request);
    check(): boolean;
}
