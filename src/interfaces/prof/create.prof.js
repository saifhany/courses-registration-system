"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfReq = void 0;
var enums_1 = require("../../utils/enums");
var CreateProfReq = /** @class */ (function () {
    function CreateProfReq(cProfRequest) {
        this.request = cProfRequest;
        this.username = "";
        this.name = '';
        this.email = '';
        this.password = "";
        this.type = enums_1.profTypes['usual'];
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    CreateProfReq.prototype.check = function () {
        try {
            var flag = true;
            this.username = !this.body["username"] ? flag = false : this.body["username"];
            this.password = !this.body["password"] ? flag = false : this.body["password"];
            this.name = !this.body["name"] ? flag = false : this.body["name"];
            this.email = !this.body["email"] ? flag = false : this.body["email"];
            this.type = enums_1.profTypes[this.body["type"]] ? enums_1.profTypes[this.body["type"]] : enums_1.profTypes.usual;
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return CreateProfReq;
}());
exports.CreateProfReq = CreateProfReq;
