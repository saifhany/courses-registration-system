import { Router, Request, Response } from "express";
import { ProfController } from '../controllers/prof.controller';
export declare class ProfRouter {
    private router;
    private profContoller;
    constructor(router: Router, profController: ProfController);
    login: (request: Request, response: Response) => Promise<void>;
    createNewProf: (request: Request, response: Response) => Promise<void>;
    logout: (request: Request, response: Response) => Promise<void>;
    addCourse: (request: Request, response: Response) => Promise<void>;
    dropCourse: (request: Request, response: Response) => Promise<void>;
    givePermission: (request: Request, response: Response) => Promise<void>;
    getCourses: (request: Request, response: Response) => Promise<void>;
    getProfs: (request: Request, response: Response) => Promise<void>;
    putGpa: (request: Request, response: Response) => Promise<void>;
}
