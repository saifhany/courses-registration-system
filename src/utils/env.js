"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
// class env loads env vars 
var Env = /** @class */ (function () {
    function Env() {
    }
    Env.PORT = process.env.PORT || 800;
    Env.dbURL = process.env.dbURL || '';
    Env.dbNAME = process.env.dbNAME || '';
    Env.JWTSECRECT = process.env.JWTSECRECT || 'secret';
    Env.HASHSERCET = process.env.HASHSERCET || 'secret';
    return Env;
}());
exports.Env = Env;
