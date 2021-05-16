import { StudentController } from "../controllers/student.controller";
import { Router, Request, Response } from "express";
export declare class StudentRouter {
    private router;
    private studentContoller;
    constructor(router: Router, studentContoller: StudentController);
    login: (request: Request, response: Response) => Promise<void>;
    logout: (request: Request, response: Response) => Promise<void>;
    createNewStudent: (request: Request, response: Response) => Promise<void>;
    getStudents: (request: Request, response: Response) => Promise<void>;
    addCourse: (request: Request, response: Response) => Promise<void>;
    dropCourse: (request: Request, response: Response) => Promise<void>;
    getCourse: (request: Request, response: Response) => Promise<void>;
}
