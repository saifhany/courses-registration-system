import { Document, Model, Schema } from 'mongoose';
import { IStudent } from './student.model';
import { ICourse } from './course.model';
export interface IStudentCourse extends Document {
    studentId: IStudent;
    courseId: ICourse;
    gpa: Number;
}
export declare const StudentCourseSchema: Schema<IStudentCourse, Model<any, any>, undefined>;
declare const StudentCourse: Model<IStudentCourse>;
export default StudentCourse;
