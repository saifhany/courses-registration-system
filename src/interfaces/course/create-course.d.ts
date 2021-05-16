import { lang } from "../../utils/enums";
import { Request } from "express";
export interface createCourse {
    name: String;
    code: String;
    fullmark: number;
    lang?: lang;
}
export declare class CreateCourseReq implements createCourse {
    name: String;
    code: String;
    fullmark: number;
    language: lang;
    private request;
    private body;
    constructor(cCourseRequest: Request);
    check(): boolean;
}
