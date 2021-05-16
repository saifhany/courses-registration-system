export interface IResponse {
    body?: any;
    error?: any;
    message?: any;
    statusCode?: any;
}
export declare class BaseResponse implements IResponse {
    body: any;
    error: any;
    message: any;
    statusCode: any;
    constructor(statusCode: any, message: any, error: any, body: any);
    response: () => {
        status: any;
        message: any;
        error: any;
        body: any;
    };
}
