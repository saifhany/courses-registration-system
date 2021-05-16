import { StudentDao } from "../dao/student.dao";
import { CreateStudentReq } from "../interfaces/student/createStudent";
import { IStudent } from "../models/student.model";
import { BaseResponse } from "../interfaces/general/base.response";
import { LoginReq } from "../interfaces/student/login";
import { Payload } from '../interfaces/general/payload.interface';
import { GetStudentReq } from '../interfaces/student/getStudents';
import { StudentCourseReq } from '../interfaces/course/add-student-course';
import { GetStudentCourseReq } from '../interfaces/course/get-student-courses';
export declare class StudentController {
    private studentDao;
    constructor(studentDao: StudentDao);
    logout: (payload: Payload) => Promise<void>;
    createNewStudent: (createStudentReq: CreateStudentReq) => Promise<BaseResponse>;
    login: (loginReq: LoginReq) => Promise<BaseResponse>;
    getStudents: (getStudentReq: GetStudentReq) => Promise<BaseResponse>;
    addStudentCourse: (student: IStudent, createStudentCourseReq: StudentCourseReq) => Promise<BaseResponse>;
    dropStudentCourse: (student: IStudent, createStudentCourseReq: StudentCourseReq) => Promise<BaseResponse>;
    getStudentCourse: (student: IStudent, createStudentCourseReq: GetStudentCourseReq) => Promise<BaseResponse>;
}
