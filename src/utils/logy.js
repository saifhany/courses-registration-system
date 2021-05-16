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
exports.Logy = void 0;
var chalk = require("chalk");
var fs_1 = __importDefault(require("fs"));
var uuid_1 = require("uuid");
var path = __importStar(require("path"));
var Logy = /** @class */ (function () {
    function Logy() {
    }
    //get time and date function
    Logy.prototype.getCurrentTimeStamp = function () {
        var str = String(new Date().getFullYear()) +
            "/" +
            String(new Date().getUTCMonth() + 1) +
            "/" +
            String(new Date().getDate()) +
            " " +
            String(new Date().getHours()) +
            ":" +
            String(new Date().getMinutes()) +
            ":" +
            String(new Date().getSeconds());
        return str;
    };
    Logy.writeFile = function () {
        if (fs_1.default.existsSync(Logy.filePath)) {
            fs_1.default.appendFileSync(Logy.filePath, '\n{\n');
            for (var item in Logy.logedDataToFile) {
                fs_1.default.appendFileSync(Logy.filePath, "\t  " + (item == 'message' || item == 'level' ? item : '') + " " + Logy.logedDataToFile[item] + "\n");
            }
            fs_1.default.appendFileSync(Logy.filePath, '\n}');
        }
        else {
            fs_1.default.writeFileSync(Logy.filePath, '\n{\n');
            for (var item in Logy.logedDataToFile) {
                fs_1.default.writeFileSync(Logy.filePath, "\t   " + (item == 'message' || item == 'level' ? item : '') + " " + Logy.logedDataToFile[item] + "\n");
            }
            fs_1.default.writeFileSync(Logy.filePath, '\n}');
        }
    };
    Logy.logger = new Logy();
    Logy.filePath = path.join(__dirname, "logger.log");
    Logy.levels = {
        info: "info",
        error: "error",
        debug: "debug",
    };
    Logy.emojes = {
        star: "⭐",
        heart: "❤️",
        correct: "✔️",
        correctBlue: "☑️",
        pencile: "✏️",
        wrong: "⛔",
        redCircile: "⭕",
        redWrong: "❌",
        play: "▶️",
    };
    //data will be loged
    Logy.logedDataToFile = {};
    //log functoin
    Logy.log = function (level, message) {
        var data = {
            level: level,
            message: message,
            timeStamp: Logy.logger.getCurrentTimeStamp(),
            id: uuid_1.v4(),
        };
        if (level == Logy.levels.error) {
            console.log("");
            console.log(chalk.bgRed.bold.white("          [" + data.level.toUpperCase() + "]          "));
            console.log('');
            console.log(chalk.red.bold(Logy.emojes.wrong + " " + JSON.stringify(data.message)));
            console.log(chalk.green(Logy.emojes.correct + "  " + data.id + " "));
            console.log(chalk.green(Logy.emojes.correct + "  " + data.timeStamp));
            console.log("");
            Logy.logedDataToFile.level = Logy.emojes.wrong + "  " + data.level.toUpperCase();
            Logy.logedDataToFile.message = Logy.emojes.wrong + "  " + JSON.stringify(data.message);
            Logy.logedDataToFile.id = Logy.emojes.correct + "  " + JSON.stringify(data.id);
            Logy.logedDataToFile.timeStamp = Logy.emojes.correct + "  " + data.timeStamp;
            Logy.writeFile();
        }
        else if (level == Logy.levels.info) {
            console.log("");
            console.log(chalk.bgCyan.bold.black("          [" + data.level.toUpperCase() + "]          "));
            console.log('');
            console.log(chalk.cyan.bold(Logy.emojes.pencile + "  " + JSON.stringify(data.message)));
            console.log(chalk.green(Logy.emojes.correct + "  " + data.id + " "));
            console.log(chalk.green(Logy.emojes.correct + "  " + data.timeStamp));
            console.log("");
            Logy.logedDataToFile.level = Logy.emojes.pencile + "  " + data.level.toUpperCase();
            Logy.logedDataToFile.message = Logy.emojes.pencile + "  " + JSON.stringify(data.message);
            Logy.logedDataToFile.id = Logy.emojes.correct + "  " + JSON.stringify(data.id);
            Logy.logedDataToFile.timeStamp = Logy.emojes.correct + "  " + data.timeStamp;
            Logy.writeFile();
        }
        else if (level == Logy.levels.debug) {
            console.log("");
            console.log(chalk.bgMagenta.bold.white("          [" + data.level.toUpperCase() + "]          "));
            console.log('');
            console.log(chalk.magenta.bold(Logy.emojes.star + "  " + JSON.stringify(data.message)));
            console.log("");
        }
    };
    return Logy;
}());
exports.Logy = Logy;
