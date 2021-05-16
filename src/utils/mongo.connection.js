"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var env_1 = require("./env");
var logy_1 = require("./logy");
// mongo config
var _dbFullURL = env_1.Env.dbURL + env_1.Env.dbNAME;
var _dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};
// db connection function
console.log({ _dbFullURL: _dbFullURL });
mongoose_1.default
    .connect(_dbFullURL, _dbOptions)
    .then(function () {
    logy_1.Logy.log("debug", "connected to " + _dbFullURL);
})
    .catch(function (error) {
    logy_1.Logy.log("error", error);
});
