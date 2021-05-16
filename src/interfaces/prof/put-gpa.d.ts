import { lang } from '../../utils/enums';
import { Request } from "express";
export interface putGpaProf {
    username: String;
    courseCode: String;
    mark: String;
    lang?: lang;
}
export declare class PutGpaProfReq implements putGpaProf {
    username: String;
    courseCode: any;
    mark: String;
    language: lang;
    private request;
    private body;
    constructor(cProfRequest: Request);
    check(): boolean;
}
