import { BaseResponse } from "../interfaces/general/base.response";
import { ProfDao } from "../dao/prof.dao";
import { CreateProfReq } from "../interfaces/prof/create.prof";
import { LoginProfReq } from "../interfaces/prof/login";
import { GetStudentReq } from "../interfaces/student/getStudents";
import { CreateCourseReq } from "../interfaces/course/create-course";
import { CourseDao } from "../dao/course.dao";
import { DropCourseReq } from "../interfaces/course/drop-course";
import { GetCourseReq } from "../interfaces/course/get-courses";
import { GivePermissionReq } from "../interfaces/prof/give-permision";
import { PutGpaProfReq } from "../interfaces/prof/put-gpa";
export declare class ProfController {
    private profDao;
    private courseDao;
    constructor(profDao: ProfDao, courseDao: CourseDao);
    createNewProf: (createProfReq: CreateProfReq) => Promise<BaseResponse>;
    login: (loginReq: LoginProfReq) => Promise<BaseResponse>;
    getProfs: (getProfRequest: GetStudentReq) => Promise<BaseResponse>;
    createNewCourse: (createCourseReq: CreateCourseReq) => Promise<BaseResponse>;
    dropCourse: (dropCourseReq: DropCourseReq) => Promise<BaseResponse>;
    getCourse: (getCourseReq: GetCourseReq) => Promise<BaseResponse>;
    givePermission: (givePermissionReq: GivePermissionReq) => Promise<BaseResponse>;
    putGpa: (putGpaProfReq: PutGpaProfReq) => Promise<BaseResponse>;
}
