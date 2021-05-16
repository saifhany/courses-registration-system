import { ICourse } from "../models/course.model";
import { GetCourseReq } from '../interfaces/course/get-courses';
export declare class CourseDao {
    constructor();
    createNewCourse: (course: ICourse) => Promise<any>;
    getAllCourses: (getCourseReq: GetCourseReq) => Promise<"" | ICourse[]>;
    dropCourse: (courseCode: String) => Promise<any>;
}
