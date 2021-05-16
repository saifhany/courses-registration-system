"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
var express_1 = __importDefault(require("express"));
var _a = require("express"), Request = _a.Request, Response = _a.Response;
var logy_1 = require("./utils/logy");
//student three layers
var student_router_1 = require("./routers/student.router");
var student_controller_1 = require("./controllers/student.controller");
var student_dao_1 = require("./dao/student.dao");
var prof_router_1 = require("./routers/prof.router");
var prof_controller_1 = require("./controllers/prof.controller");
var prof_dao_1 = require("./dao/prof.dao");
var course_dao_1 = require("./dao/course.dao");
var Backend = /** @class */ (function () {
    function Backend(router, application) {
        this.application = application;
        // dependency injection for student three layers 
        var studentRouterObject = express_1.default.Router();
        var studentDao = new student_dao_1.StudentDao();
        var studentController = new student_controller_1.StudentController(studentDao);
        new student_router_1.StudentRouter(studentRouterObject, studentController);
        //PROF
        var profRouterObject = express_1.default.Router();
        var profDao = new prof_dao_1.ProfDao();
        var courseDao = new course_dao_1.CourseDao();
        var profController = new prof_controller_1.ProfController(profDao, courseDao);
        new prof_router_1.ProfRouter(profRouterObject, profController);
        // use the router object 
        application.use('/student', studentRouterObject);
        application.use('/prof', profRouterObject);
    }
    // start backend
    Backend.prototype.start = function (PORT) {
        this.application.listen(PORT, function () {
            logy_1.Logy.log('debug', "server is up at http://localhost:" + PORT || 5000);
        });
    };
    return Backend;
}());
exports.Backend = Backend;
