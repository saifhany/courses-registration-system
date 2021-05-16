import { Request, Response } from 'express';
export declare class JWT {
    static generateToken: (data: {}) => any;
    static verifyToken: (token: String) => any;
    static StudentAuth: (request: Request, response: Response, next: any) => Promise<void>;
    static ProfAuth: (request: Request, response: Response, next: any) => Promise<void>;
}
