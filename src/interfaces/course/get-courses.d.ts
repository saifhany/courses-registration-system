import { lang } from "../../utils/enums";
import { Request } from "express";
export interface getCourse {
    name: String;
    code: String;
    lang?: lang;
    limit: number;
    skip: number;
}
export declare class GetCourseReq implements getCourse {
    name: String;
    code: String;
    limit: number;
    skip: number;
    language: lang;
    private request;
    private body;
    constructor(getCourseRequest: Request);
    check(): boolean;
}
