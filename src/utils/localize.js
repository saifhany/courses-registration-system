"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localize = void 0;
var enums_1 = require("./enums");
var ar = require("./../localize/ar.json");
var en = require("./../localize/en.json");
var Localize = /** @class */ (function () {
    function Localize() {
    }
    Localize.language = enums_1.lang.Arabic;
    Localize._getFromJson = function (language, text) {
        Localize.language = language;
        switch (Localize.language) {
            case enums_1.lang.Arabic:
                return ar[text];
                break;
            case enums_1.lang.English:
                return en[text];
                break;
        }
    };
    Localize.localize = function (lang, text) {
        if (Localize._getFromJson(lang, text))
            return Localize._getFromJson(lang, text);
        else
            return text;
    };
    return Localize;
}());
exports.Localize = Localize;
