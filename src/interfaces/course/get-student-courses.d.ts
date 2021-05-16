import { lang } from "../../utils/enums";
import { Request } from "express";
export interface getStudentCourse {
    code?: String;
    lang?: lang;
}
export declare class GetStudentCourseReq implements getStudentCourse {
    code: String;
    language: lang;
    private request;
    private body;
    constructor(cCourseRequest: Request);
    check(): false | undefined;
}
