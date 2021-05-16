"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentReq = void 0;
var enums_1 = require("../../utils/enums");
var CreateStudentReq = /** @class */ (function () {
    function CreateStudentReq(cStudentRequest) {
        this.request = cStudentRequest;
        this.username = "";
        this.name = '';
        this.email = '';
        this.password = "";
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    CreateStudentReq.prototype.check = function () {
        try {
            var flag = true;
            this.username = !this.body["username"] ? flag = false : this.body["username"];
            this.password = !this.body["password"] ? flag = false : this.body["password"];
            this.name = !this.body["name"] ? flag = false : this.body["name"];
            this.email = !this.body["email"] ? flag = false : this.body["email"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return CreateStudentReq;
}());
exports.CreateStudentReq = CreateStudentReq;
