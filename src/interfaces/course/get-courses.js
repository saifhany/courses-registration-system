"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCourseReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var GetCourseReq = /** @class */ (function () {
    function GetCourseReq(getCourseRequest) {
        this.request = getCourseRequest;
        this.name = '';
        this.code = '';
        this.skip = 0;
        this.limit = 10;
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    GetCourseReq.prototype.check = function () {
        try {
            var flag = true;
            console.log(this.body["fullmark"]);
            this.name = this.body["name"];
            this.code = this.body["code"];
            this.skip = this.body["limit"];
            this.limit = this.body["skip"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return GetCourseReq;
}());
exports.GetCourseReq = GetCourseReq;
