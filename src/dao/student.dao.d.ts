import { IStudent } from "./../models/student.model";
import { LoginReq } from "../interfaces/student/login";
import { GetStudentReq } from "../interfaces/student/getStudents";
export declare class StudentDao {
    constructor();
    login: (loginReq: LoginReq) => Promise<any>;
    createNewStudent: (student: IStudent) => Promise<any>;
    getAllStudents: (getStudentReq: GetStudentReq) => Promise<"" | IStudent[]>;
    addStudentCourse: (student: IStudent, code: String) => Promise<any>;
    dropStudentCourse: (student: IStudent, code: String) => Promise<any>;
    getStudentCourse: (student: IStudent, code: String) => Promise<any>;
}
