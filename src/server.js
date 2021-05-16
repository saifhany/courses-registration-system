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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var dotenv = __importStar(require("dotenv"));
var helmet_1 = __importDefault(require("helmet"));
var compression_1 = __importDefault(require("compression"));
//load env vars
dotenv.config({ path: __dirname + "/env/.env" });
var env_1 = require("./utils/env");
var bodyParser = __importStar(require("body-parser"));
// DB connection
require("./utils/mongo.connection");
// get backend class
var Backend_1 = require("./Backend");
// application object from express
var application = express_1.default();
application.use(bodyParser.json());
// use ejs as templete engine to render views files
application.set("view engine", "ejs");
// set the view path
application.set("views", path.join(__dirname, "views/pages/"));
// set where to find static files like css imgs etc
application.use(express_1.default.static(path.join(__dirname, "assets")));
// render/serve Home Screen
application.get("/", function (req, res) {
    res.render(path.join("home.ejs"));
});
// render/serve API Screen
application.get("/apis", function (req, res) {
    res.render(path.join("apis.ejs"), { apis: apiList });
});
// secure header
application.use(helmet_1.default());
// comprss files such as asseets
application.use(compression_1.default());
// new object from back end
var backend = new Backend_1.Backend(express_1.default.Router(), application);
// get PORT from env vars
var PORT = env_1.Env.PORT;
// start back-end
backend.start(PORT);
var apiList = [
    {
        title: "Student",
        apis: [
            "student/login",
            "student/logout",
            "student/get-studets",
            "student/create-student",
            "student/add-course",
            "student/drop-course",
            "student/get-course",
        ],
    },
    {
        title: "Prof",
        apis: [
            "prof/login",
            "prof/logout",
            "prof/get-profs",
            "prof/create-prof",
            "prof/add-course",
            "prof/drop-course",
            "prof/get-course",
            "prof/give-permission",
            "prof/student-course",
        ],
    },
];
