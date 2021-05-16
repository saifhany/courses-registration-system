import { lang } from "../../utils/enums";
import { Request } from "express";
export interface dropCourse {
    code: String;
    lang?: lang;
}
export declare class DropCourseReq implements dropCourse {
    code: String;
    language: lang;
    private request;
    private body;
    constructor(dropCourseRequest: Request);
    check(): boolean;
}
