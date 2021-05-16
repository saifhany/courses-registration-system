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
exports.ProfRouter = void 0;
var logy_1 = require("../utils/logy");
var localize_1 = require("../utils/localize");
var enums_1 = require("../utils/enums");
var base_response_1 = require("../interfaces/general/base.response");
var create_prof_1 = require("../interfaces/prof/create.prof");
var login_1 = require("../interfaces/prof/login");
var jwt_1 = require("../utils/jwt");
var getStudents_1 = require("../interfaces/student/getStudents");
var create_course_1 = require("../interfaces/course/create-course");
var drop_course_1 = require("../interfaces/course/drop-course");
var get_courses_1 = require("../interfaces/course/get-courses");
var give_permision_1 = require("../interfaces/prof/give-permision");
var put_gpa_1 = require("../interfaces/prof/put-gpa");
var ProfRouter = /** @class */ (function () {
    // this router depends on student controller
    function ProfRouter(router, profController) {
        var _this = this;
        this.router = router;
        this.login = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var loginReq, result, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logy_1.Logy.log('info', 'login student called');
                        loginReq = new login_1.LoginProfReq(request);
                        if (!loginReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.profContoller.login(loginReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.createNewProf = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var createProfReq, result, newResponse, error_1, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        createProfReq = new create_prof_1.CreateProfReq(request);
                        if (!createProfReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.profContoller.createNewProf(createProfReq)];
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
            var prof, error_2, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        logy_1.Logy.log('info', 'logout called');
                        prof = request['prof'];
                        prof.accessToken = '';
                        return [4 /*yield*/, prof.save()];
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
        this.addCourse = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var createCourseReq, result, newResponse, error_3, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        createCourseReq = new create_course_1.CreateCourseReq(request);
                        if (!createCourseReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.profContoller.createNewCourse(createCourseReq)];
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
        this.dropCourse = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var dropCourseReq, result, newResponse, error_4, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        dropCourseReq = new drop_course_1.DropCourseReq(request);
                        if (!dropCourseReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.profContoller.dropCourse(dropCourseReq)];
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
        this.givePermission = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var prof, givePermissionReq, permission, result, newResponse, newResponse, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        prof = request['prof'];
                        givePermissionReq = new give_permision_1.GivePermissionReq(request);
                        if (!givePermissionReq.check()) return [3 /*break*/, 4];
                        console.log('one');
                        permission = +prof.type > +givePermissionReq.type;
                        console.log(prof.type, givePermissionReq.type);
                        if (!(+prof.type > +givePermissionReq.type)) return [3 /*break*/, 2];
                        console.log('two');
                        return [4 /*yield*/, this.profContoller.givePermission(givePermissionReq)];
                    case 1:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 3];
                    case 2:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.Forbidden, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_5 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.getCourses = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var getCourseReq, result, newResponse, error_6, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        getCourseReq = new get_courses_1.GetCourseReq(request);
                        if (!getCourseReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.profContoller.getCourse(getCourseReq)];
                    case 1:
                        result = _a.sent();
                        logy_1.Logy.log('debug', 'here3');
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
        this.getProfs = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var getProfReq, result, newResponse, error_7, newResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        getProfReq = new getStudents_1.GetStudentReq(request);
                        if (!getProfReq.check()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.profContoller.getProfs(getProfReq)];
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
                        error_7 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.putGpa = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var putGpaProfReq, result, newResponse, error_8, newResponse, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        putGpaProfReq = new put_gpa_1.PutGpaProfReq(request);
                        if (!putGpaProfReq.check()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.profContoller.putGpa(putGpaProfReq)];
                    case 2:
                        result = _a.sent();
                        response.status(result.statusCode).send(result);
                        return [3 /*break*/, 4];
                    case 3:
                        logy_1.Logy.log("error", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"));
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.WrongInput, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "WrongData"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_8 = _a.sent();
                        newResponse = new base_response_1.BaseResponse(enums_1.resStatus.UnprocessableEntity, "", localize_1.Localize.localize(request.body.lang || enums_1.lang.Arabic, "RequestError"), "");
                        response.status(enums_1.resStatus.WrongInput).send(newResponse);
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_9 = _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        this.profContoller = profController;
        // prof routes
        this.router.post("/get-profs", jwt_1.JWT.ProfAuth, this.getProfs);
        this.router.post("/create-prof", this.createNewProf);
        this.router.post("/login", this.login);
        this.router.post("/logout", jwt_1.JWT.ProfAuth, this.logout);
        this.router.post("/add-course", jwt_1.JWT.ProfAuth, this.addCourse);
        this.router.post("/drop-course", jwt_1.JWT.ProfAuth, this.dropCourse);
        this.router.post("/get-course", jwt_1.JWT.ProfAuth, this.getCourses);
        this.router.post("/give-permission", jwt_1.JWT.ProfAuth, this.givePermission);
        this.router.post('/put-gpa', jwt_1.JWT.ProfAuth, this.putGpa);
    }
    return ProfRouter;
}());
exports.ProfRouter = ProfRouter;
