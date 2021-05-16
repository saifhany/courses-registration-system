"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfSchema = void 0;
var mongoose_1 = require("mongoose");
var validator_1 = require("validator");
var enums_1 = require("../utils/enums");
exports.ProfSchema = new mongoose_1.Schema({
    name: { type: String, },
    email: { type: String, trim: true, unique: true, validate: [validator_1.isEmail, 'invalid email'] },
    username: { type: String, required: true, trim: true, unique: true, },
    password: { type: String, required: true, },
    accessToken: { type: String },
    type: { type: enums_1.profTypes },
    courses: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Course" }]
}, {
    collection: 'prof',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});
var Prof = mongoose_1.model('Prof', exports.ProfSchema);
exports.default = Prof;
