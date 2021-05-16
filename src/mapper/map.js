"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP = void 0;
var MAP = /** @class */ (function () {
    function MAP() {
    }
    MAP.mapOne = function (obj) {
        obj['accessToken'] = undefined;
        obj['password'] = undefined;
        return obj;
    };
    MAP.mapMany = function (objList) {
        return objList.map(MAP.mapOne);
    };
    return MAP;
}());
exports.MAP = MAP;
