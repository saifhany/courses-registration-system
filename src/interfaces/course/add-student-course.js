"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCourseReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var StudentCourseReq = /** @class */ (function () {
    function StudentCourseReq(cCourseRequest) {
        this.request = cCourseRequest;
        this.code = '';
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    StudentCourseReq.prototype.check = function () {
        try {
            var flag = true;
            this.code = !this.body["code"] ? flag = false : this.body["code"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return StudentCourseReq;
}());
exports.StudentCourseReq = StudentCourseReq;
