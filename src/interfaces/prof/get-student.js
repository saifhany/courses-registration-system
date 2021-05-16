"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfStudentReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var GetProfStudentReq = /** @class */ (function () {
    function GetProfStudentReq(gProfRequest) {
        this.request = gProfRequest;
        this.body = this.request.body;
        this.profUsername = this.body["profUsername"] || '';
        this.courseCode = this.body["courseCode"] || '';
        this.studentUserName = this.body["studentUserName"] || '';
        this.skip = this.body["skip"] || 0;
        this.limit = this.body["limit"] || 5;
        this.language = enums_1.lang.Arabic;
    }
    return GetProfStudentReq;
}());
exports.GetProfStudentReq = GetProfStudentReq;
