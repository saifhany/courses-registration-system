import { Document, Model, Schema } from 'mongoose';
import { IProf } from './prof.model';
export interface ICourse extends Document {
    name: String;
    code: String;
    fullMark: Number;
    prof: IProf;
}
export declare const CourseSchema: Schema<ICourse, Model<any, any>, undefined>;
declare const Course: Model<ICourse>;
export default Course;
