import { Document, Model, Schema } from 'mongoose';
import { profTypes } from '../utils/enums';
import { ICourse } from './course.model';
export interface IProf extends Document {
    name: String;
    username: String;
    password: String;
    accessToken: String;
    email: String;
    courses?: ICourse[];
    type: profTypes;
}
export declare const ProfSchema: Schema<IProf, Model<any, any>, undefined>;
declare const Prof: Model<IProf>;
export default Prof;
