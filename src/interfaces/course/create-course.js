"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var CreateCourseReq = /** @class */ (function () {
    function CreateCourseReq(cCourseRequest) {
        this.request = cCourseRequest;
        this.name = '';
        this.code = '';
        this.fullmark = 0;
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    CreateCourseReq.prototype.check = function () {
        try {
            var flag = true;
            console.log(this.body["fullmark"]);
            this.name = !this.body["name"] ? flag = false : this.body["name"];
            this.code = !this.body["code"] ? flag = false : this.body["code"];
            this.fullmark = !this.body["fullmark"] ? flag = false : this.body["fullmark"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return CreateCourseReq;
}());
exports.CreateCourseReq = CreateCourseReq;
