import { LoginProfReq } from "../interfaces/prof/login";
import { GetStudentReq } from "../interfaces/student/getStudents";
import { ICourse } from "../models/course.model";
import { GivePermissionReq } from "../interfaces/prof/give-permision";
import { PutGpaProfReq } from "../interfaces/prof/put-gpa";
import { IProf } from "../models/prof.model";
export declare class ProfDao {
    constructor();
    login: (loginReq: LoginProfReq) => Promise<any>;
    createNewProf: (prof: IProf) => Promise<any>;
    getAllStudents: (getProfRequest: GetStudentReq) => Promise<"" | IProf[]>;
    createNewCourse: (course: ICourse) => Promise<any>;
    givePermission: (givePermissionReq: GivePermissionReq) => Promise<void>;
    putGpa: (putGpaProfReq: PutGpaProfReq) => Promise<import("../models/student-course.model").IStudentCourse | {
        error: any;
    }>;
}
