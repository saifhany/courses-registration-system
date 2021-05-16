export interface ProfStudent {
    course: String;
    student: {
        name: String;
        userName: String;
    }[];
}
export declare class MapTeacherStudents {
    static mapOne: (course: any, courseList: any[]) => any;
    static mapMany: (objList: any) => any;
}
