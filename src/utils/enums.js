"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profTypes = exports.resStatus = exports.lang = void 0;
var lang;
(function (lang) {
    lang["Arabic"] = "Ar";
    lang["English"] = "En";
})(lang = exports.lang || (exports.lang = {}));
var resStatus;
(function (resStatus) {
    resStatus[resStatus["Successful"] = 200] = "Successful";
    resStatus[resStatus["created"] = 201] = "created";
    resStatus[resStatus["Unauthorized"] = 401] = "Unauthorized";
    resStatus[resStatus["NotFound"] = 404] = "NotFound";
    resStatus[resStatus["InternalServerError"] = 500] = "InternalServerError";
    resStatus[resStatus["WrongInput"] = 400] = "WrongInput";
    resStatus[resStatus["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    resStatus[resStatus["Forbidden"] = 403] = "Forbidden";
})(resStatus = exports.resStatus || (exports.resStatus = {}));
var profTypes;
(function (profTypes) {
    profTypes[profTypes["admin"] = 2] = "admin";
    profTypes[profTypes["manger"] = 1] = "manger";
    profTypes[profTypes["usual"] = 0] = "usual";
})(profTypes = exports.profTypes || (exports.profTypes = {}));
