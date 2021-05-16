"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var LoginReq = /** @class */ (function () {
    function LoginReq(loginRequest) {
        this.request = loginRequest;
        this.username = "";
        this.email = '';
        this.password = "";
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    LoginReq.prototype.check = function () {
        try {
            var flag = true;
            this.username = !this.body["username"] ? flag = false : this.body["username"];
            this.email = !this.body["email"] ? flag = false : this.body["email"];
            if (this.username || this.email)
                flag = true;
            this.password = !this.body["password"] ? flag = false : this.body["password"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return LoginReq;
}());
exports.LoginReq = LoginReq;
