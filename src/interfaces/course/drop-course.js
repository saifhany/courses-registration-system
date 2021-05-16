"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropCourseReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var DropCourseReq = /** @class */ (function () {
    function DropCourseReq(dropCourseRequest) {
        this.request = dropCourseRequest;
        this.code = "";
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    DropCourseReq.prototype.check = function () {
        try {
            var flag = true;
            console.log(this.body["fullmark"]);
            this.code = !this.body["code"] ? (flag = false) : this.body["code"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return DropCourseReq;
}());
exports.DropCourseReq = DropCourseReq;
