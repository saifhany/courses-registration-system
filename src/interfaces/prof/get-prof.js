"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProftReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var GetProftReq = /** @class */ (function () {
    function GetProftReq(gProfRequest) {
        this.request = gProfRequest;
        this.username = "";
        this.name = '';
        this.email = '';
        this.skip = 0;
        this.limit = 5;
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    GetProftReq.prototype.check = function () {
        try {
            var flag = true;
            this.username = this.body["username"];
            this.name = this.body["name"];
            this.email = this.body["email"];
            this.skip = this.body["skip"];
            this.limit = this.body["limit"];
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return GetProftReq;
}());
exports.GetProftReq = GetProftReq;
