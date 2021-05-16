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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRouter = void 0;
var logy_1 = require("../utils/logy");
var localize_1 = require("../utils/localize");
var enums_1 = require("../utils/enums");
var createStudent_1 = require("../interfaces/student/createStudent");
var base_response_1 = require("../interfaces/general/base.response");
var login_1 = require("../interfaces/student/login");
var jwt_1 = require("../utils/jwt");
var getStudents_1 = require("../interfaces/student/getStudents");
var add_student_course_1 = require("../interfaces/course/add-student-course");
var get_student_courses_1 = require("../interfaces/course/get-student-courses");
var StudentRouter = /** @class */ (function () {
    // this router depends on student controller
    function StudentRouter(router, studentContoller) {
        var _this = this;
        this.router = router;
        this.login = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var loginReq, result, newResponse, error_1, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        logy_1.Logy.log('info', 'login student called');
                        loginReq = new login_1.LoginReq(request);
                        if (!loginReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.studentContoller.login(loginReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.logout = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var student, error_2, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logy_1.Logy.log('info', 'logout called');
                        student = request['student'];
                        student.accessToken = '';
                        return [4 /*yield*/, student.save()];
                    case 1:
                        _a.sent();
                        response.send('logedOut');
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.createNewStudent = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var createStudentReq, result, newResponse, error_3, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        createStudentReq = new createStudent_1.CreateStudentReq(request);
                        if (!createStudentReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.studentContoller.createNewStudent(createStudentReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.getStudents = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var getStudentReq, result, newResponse, error_4, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        getStudentReq = new getStudents_1.GetStudentReq(request);
                        if (!getStudentReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.studentContoller.getStudents(getStudentReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_4 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.addCourse = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var createStudentCourseReq, student, result, newResponse, error_5, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        createStudentCourseReq = new add_student_course_1.StudentCourseReq(request);
                        student = request['student'];
                        if (!createStudentCourseReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.studentContoller.addStudentCourse(student, createStudentCourseReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.dropCourse = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var dropStudentCourseReq, student, result, newResponse, error_6, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        dropStudentCourseReq = new add_student_course_1.StudentCourseReq(request);
                        student = request['student'];
                        if (!dropStudentCourseReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.studentContoller.dropStudentCourse(student, dropStudentCourseReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_6 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.getCourse = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var getStudentCourseReq, student, result, error_7, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        getStudentCourseReq = new get_student_courses_1.GetStudentCourseReq(request);
                        student = request['student'];
                        return [4 /*yield*/, this.studentContoller.getStudentCourse(student, getStudentCourseReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.studentContoller = studentContoller;
        // student routes
        this.router.post("/get-student", jwt_1.JWT.StudentAuth, this.getStudents);
        this.router.post("/create-student", this.createNewStudent);
        this.router.post("/login", this.login);
        this.router.post("/logout", jwt_1.JWT.StudentAuth, this.logout);
        this.router.post("/add-course", jwt_1.JWT.StudentAuth, this.addCourse);
        this.router.post("/drop-course", jwt_1.JWT.StudentAuth, this.dropCourse);
        this.router.post("/get-course", jwt_1.JWT.StudentAuth, this.getCourse);
    }
    return StudentRouter;
}());
exports.StudentRouter = StudentRouter;
