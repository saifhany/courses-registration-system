"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
var BaseResponse = /** @class */ (function () {
    function BaseResponse(statusCode, message, error, body) {
        var _this = this;
        this.response = function () {
            return {
                status: _this.statusCode,
                message: _this.message,
                error: _this.error,
                body: _this.body,
            };
        };
        this.statusCode = statusCode;
        this.error = error;
        this.body = body;
        this.message = message;
    }
    return BaseResponse;
}());
exports.BaseResponse = BaseResponse;
