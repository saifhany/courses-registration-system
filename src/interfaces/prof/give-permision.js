"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GivePermissionReq = void 0;
var enums_1 = require("../../utils/enums");
3;
var GivePermissionReq = /** @class */ (function () {
    function GivePermissionReq(cProfRequest) {
        this.request = cProfRequest;
        this.username = "";
        this.type = enums_1.profTypes.usual;
        this.language = enums_1.lang.Arabic;
        this.body = this.request.body;
    }
    GivePermissionReq.prototype.check = function () {
        try {
            var flag = true;
            this.username = !this.body["username"] ? flag = false : this.body["username"];
            this.type = enums_1.profTypes[this.body["type"]] ? enums_1.profTypes[this.body["type"]] : enums_1.profTypes.usual;
            this.language = this.body["lang"] || enums_1.lang.Arabic;
            return flag;
        }
        catch (error) {
            return false;
        }
    };
    return GivePermissionReq;
}());
exports.GivePermissionReq = GivePermissionReq;
