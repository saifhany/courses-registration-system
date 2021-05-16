import express, { Router } from "express";
export declare class Backend {
    application: express.Application;
    constructor(router: Router, application: express.Application);
    start(PORT: number): void;
}
