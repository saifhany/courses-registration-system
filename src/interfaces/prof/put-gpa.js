"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutGpaProfReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var PutGpaProfReq = /** @class */ (function () {
    function PutGpaProfReq(cProfRequest) {
        this.request = cProfRequest;
        this.username = "";
        this.courseCode = "";
        this.mark = '0';
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    PutGpaProfReq.prototype.check = function () {
        try {
            var flag = true;
            this.username = !this.body["username"] ? flag = false : this.body["username"];
            this.mark = !this.body["mark"] ? flag = false : this.body["mark"];
            this.courseCode = !this.body["courseCode"] ? flag = false : this.body["courseCode"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return PutGpaProfReq;
}());
exports.PutGpaProfReq = PutGpaProfReq;
