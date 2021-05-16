import { lang } from '../../utils/enums';
import { Request } from "express";
export interface givePermissionProf {
    username: String;
    type: any;
    lang?: lang;
}
export declare class GivePermissionReq implements givePermissionProf {
    username: String;
    type: any;
    language: lang;
    private request;
    private body;
    constructor(cProfRequest: Request);
    check(): boolean;
}
