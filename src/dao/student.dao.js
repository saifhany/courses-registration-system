"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDao = void 0;
var student_model_1 = __importDefault(require("./../models/student.model"));
var logy_1 = require("../utils/logy");
var jwt_1 = require("../utils/jwt");
var Hash_1 = require("../utils/Hash");
var course_model_1 = __importDefault(require("../models/course.model"));
var student_course_model_1 = __importDefault(require("../models/student-course.model"));
var StudentDao = /** @class */ (function () {
    function StudentDao() {
        var _this = this;
        this.login = function (loginReq) { return __awaiter(_this, void 0, void 0, function () {
            var query, student, isCorrect, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        query = {};
                        loginReq.username ? (query.username = loginReq.username) : null;
                        loginReq.email ? (query.email = loginReq.email) : null;
                        console.log(query);
                        return [4 /*yield*/, student_model_1.default.findOne(query)];
                    case 1:
                        student = _a.sent();
                        console.log(student);
                        if (!student) return [3 /*break*/, 3];
                        isCorrect = Hash_1.Hash.compare(loginReq.password.toString(), student.password.toString());
                        if (!isCorrect) return [3 /*break*/, 3];
                        student.accessToken = jwt_1.JWT.generateToken({ id: student._id });
                        return [4 /*yield*/, student.save()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/, { error: "SudentNotFound" }];
                    case 4:
                        error_1 = _a.sent();
                        logy_1.Logy.log("error", error_1);
                        return [2 /*return*/, error_1];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.createNewStudent = function (student) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        student.accessToken = jwt_1.JWT.generateToken({ id: student._id });
                        student.password = Hash_1.Hash.encrypt(student.password.toString());
                        return [4 /*yield*/, student.save()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        logy_1.Logy.log("error", error_2);
                        return [2 /*return*/, error_2];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllStudents = function (getStudentReq) { return __awaiter(_this, void 0, void 0, function () {
            var query, skip, limit, students, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = {};
                        getStudentReq.username ? (query["username"] = getStudentReq.username) : null;
                        getStudentReq.name ? (query["name"] = getStudentReq.name) : null;
                        getStudentReq.email ? (query["email"] = getStudentReq.email) : null;
                        skip = +getStudentReq.skip;
                        limit = +getStudentReq.limit;
                        console.log(query);
                        return [4 /*yield*/, student_model_1.default.find(query).skip(skip).limit(limit)];
                    case 1:
                        students = _a.sent();
                        return [2 /*return*/, students];
                    case 2:
                        error_3 = _a.sent();
                        logy_1.Logy.log("error", error_3);
                        return [2 /*return*/, ""];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addStudentCourse = function (student, code) { return __awaiter(_this, void 0, void 0, function () {
            var course, newCourse, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, course_model_1.default.findOne({ code: code })];
                    case 1:
                        course = _a.sent();
                        console.log(course);
                        if (!course) {
                            return [2 /*return*/, { error: "course does not exist" }];
                        }
                        newCourse = new student_course_model_1.default({
                            studentId: student,
                            courseId: course,
                        });
                        return [4 /*yield*/, newCourse.save()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, error_4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.dropStudentCourse = function (student, code) { return __awaiter(_this, void 0, void 0, function () {
            var course, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        console.log(student._id);
                        return [4 /*yield*/, course_model_1.default.findOne({ code: code })];
                    case 1:
                        course = _a.sent();
                        console.log(course);
                        if (!course) {
                            return [2 /*return*/, { error: "course does not exist" }];
                        }
                        return [4 /*yield*/, student_course_model_1.default.findOneAndDelete({
                                studentId: student._id,
                                courseId: course._id,
                            })];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, result];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, error_5];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getStudentCourse = function (student, code) { return __awaiter(_this, void 0, void 0, function () {
            var course, result, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!code) return [3 /*break*/, 3];
                        return [4 /*yield*/, course_model_1.default.findOne({ code: code })];
                    case 1:
                        course = _a.sent();
                        return [4 /*yield*/, student_course_model_1.default.findOne({
                                studentId: student._id,
                                courseId: course === null || course === void 0 ? void 0 : course._id,
                            })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3: return [4 /*yield*/, student_course_model_1.default.find({
                            studentId: student._id,
                        }).populate('studentId').populate('courseId')];
                    case 4:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_6 = _a.sent();
                        return [2 /*return*/, error_6];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    }
    return StudentDao;
}());
exports.StudentDao = StudentDao;
