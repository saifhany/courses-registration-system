"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
var bcryptjs = __importStar(require("bcryptjs"));
var env_1 = require("./env");
var Hash = /** @class */ (function () {
    function Hash() {
    }
    Hash.compare = function (text, hash) {
        return bcryptjs.compareSync(text, hash);
    };
    Hash.salt = bcryptjs.genSaltSync(+env_1.Env.HASHSERCET);
    Hash.encrypt = function (text) {
        return bcryptjs.hashSync(text, Hash.salt);
    };
    return Hash;
}());
exports.Hash = Hash;
