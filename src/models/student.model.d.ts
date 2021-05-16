import { Document, Model, Schema } from "mongoose";
export interface IStudent extends Document {
    name: String;
    username: String;
    password: String;
    accessToken: String;
    email: String;
}
export declare const StudentSchema: Schema<IStudent, Model<any, any>, undefined>;
declare const Student: Model<IStudent>;
export default Student;
