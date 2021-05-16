"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStudentCourseReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var GetStudentCourseReq = /** @class */ (function () {
    function GetStudentCourseReq(cCourseRequest) {
        this.request = cCourseRequest;
        this.code = '';
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    GetStudentCourseReq.prototype.check = function () {
        try {
            this.code = this.body["code"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
        }
        catch (error) {
            return false;
        }
    };
    return GetStudentCourseReq;
}());
exports.GetStudentCourseReq = GetStudentCourseReq;
