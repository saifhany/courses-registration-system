"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
var validator_1 = require("validator");
exports.StudentSchema = new mongoose_1.Schema({
    name: { type: String },
    email: {
        type: String,
        trim: true,
        unique: true,
        validate: [validator_1.isEmail, "invalid email"],
    },
    username: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    accessToken: { type: String },
}, {
    collection: "student",
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
});
var Student = mongoose_1.model("Student", exports.StudentSchema);
exports.default = Student;
