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
exports.StudentController = void 0;
var logy_1 = require("../utils/logy");
var student_model_1 = __importDefault(require("../models/student.model"));
var base_response_1 = require("../interfaces/general/base.response");
var enums_1 = require("../utils/enums");
var localize_1 = require("../utils/localize");
var map_1 = require("../mapper/map");
var map_student_course_1 = require("../mapper/map-student-course");
var StudentController = /** @class */ (function () {
    function StudentController(studentDao) {
        var _this = this;
        this.studentDao = studentDao;
        this.logout = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var studentId;
            return __generator(this, function (_a) {
                try {
                    studentId = payload.id;
                }
                catch (error) {
                }
                return [2 /*return*/];
            });
        }); };
        this.createNewStudent = function (createStudentReq) { return __awaiter(_this, void 0, void 0, function () {
            var newStudent, result, res, res, error_1, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        newStudent = new student_model_1.default({
                            name: createStudentReq.name,
                            username: createStudentReq.username,
                            password: createStudentReq.password,
                            email: createStudentReq.email,
                            accessToken: "",
                        });
                        return [4 /*yield*/, this.studentDao.createNewStudent(newStudent)];
                    case 1:
                        result = _a.sent();
                        if (!result._id) {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, result.message, result, "");
                            return [2 /*return*/, res];
                        }
                        else {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.Successful, localize_1.Localize.localize(createStudentReq.language, "studentCreate"), "", result);
                            return [2 /*return*/, res];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        logy_1.Logy.log("error", error_1);
                        res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, localize_1.Localize.localize(createStudentReq.language, "RequestError"), error_1, "");
                        return [2 /*return*/, res];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.login = function (loginReq) { return __awaiter(_this, void 0, void 0, function () {
            var result, res, res, error_2, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.studentDao.login(loginReq)];
                    case 1:
                        result = _a.sent();
                        if (!result.error) {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.Successful, localize_1.Localize.localize(loginReq.language, "successfull"), "", result);
                            return [2 /*return*/, res];
                        }
                        else {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.NotFound, localize_1.Localize.localize(loginReq.language, result.error), '', "");
                            return [2 /*return*/, res];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        logy_1.Logy.log("error", error_2);
                        res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, localize_1.Localize.localize(loginReq.language, "RequestError"), error_2, "");
                        return [2 /*return*/, res];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getStudents = function (getStudentReq) { return __awaiter(_this, void 0, void 0, function () {
            var result, res, error_3, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.studentDao.getAllStudents(getStudentReq)];
                    case 1:
                        result = _a.sent();
                        res = new base_response_1.BaseResponse(enums_1.resStatus.Successful, localize_1.Localize.localize(getStudentReq.language, "successfull"), "", map_1.MAP.mapMany(result));
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        logy_1.Logy.log("error", error_3);
                        res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, localize_1.Localize.localize(getStudentReq.language, "RequestError"), error_3, "");
                        return [2 /*return*/, res];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addStudentCourse = function (student, createStudentCourseReq) { return __awaiter(_this, void 0, void 0, function () {
            var courseCode, result, res, res, error_4, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        courseCode = createStudentCourseReq.code;
                        return [4 /*yield*/, this.studentDao.addStudentCourse(student, courseCode)];
                    case 1:
                        result = _a.sent();
                        if (!result.error) {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, result.message, result, "");
                            return [2 /*return*/, res];
                        }
                        else {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.Successful, localize_1.Localize.localize(createStudentCourseReq.language, "courseCreate"), "", result.error);
                            return [2 /*return*/, res];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        logy_1.Logy.log("error", error_4);
                        res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, localize_1.Localize.localize(createStudentCourseReq.language, "RequestError"), error_4, "");
                        return [2 /*return*/, res];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.dropStudentCourse = function (student, createStudentCourseReq) { return __awaiter(_this, void 0, void 0, function () {
            var courseCode, result, res, res, error_5, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        courseCode = createStudentCourseReq.code;
                        console.log(courseCode);
                        return [4 /*yield*/, this.studentDao.dropStudentCourse(student, courseCode)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (!result.error) {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, result.message, result, "");
                            return [2 /*return*/, res];
                        }
                        else {
                            res = new base_response_1.BaseResponse(enums_1.resStatus.Successful, localize_1.Localize.localize(createStudentCourseReq.language, "courseDrop"), "", result.error);
                            return [2 /*return*/, res];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        logy_1.Logy.log("error", error_5);
                        res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, localize_1.Localize.localize(createStudentCourseReq.language, "RequestError"), error_5, "");
                        return [2 /*return*/, res];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getStudentCourse = function (student, createStudentCourseReq) { return __awaiter(_this, void 0, void 0, function () {
            var courseCode, result, res, error_6, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        courseCode = createStudentCourseReq.code || '';
                        return [4 /*yield*/, this.studentDao.getStudentCourse(student, courseCode)];
                    case 1:
                        result = _a.sent();
                        res = new base_response_1.BaseResponse(enums_1.resStatus.Successful, localize_1.Localize.localize(createStudentCourseReq.language, "successfull"), "", map_student_course_1.MapStudentCourse.map(result));
                        return [2 /*return*/, res];
                    case 2:
                        error_6 = _a.sent();
                        logy_1.Logy.log("error", error_6);
                        res = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, localize_1.Localize.localize(createStudentCourseReq.language, "RequestError"), error_6, "");
                        return [2 /*return*/, res];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.studentDao = studentDao;
    }
    return StudentController;
}());
exports.StudentController = StudentController;
