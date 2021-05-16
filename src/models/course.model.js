"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CourseSchema = new mongoose_1.Schema({
    name: { type: String, },
    code: { type: String, trim: true, unique: true },
    fullMark: { type: Number, required: true },
    prof: { type: mongoose_1.Schema.Types.ObjectId, ref: "Prof" },
}, {
    collection: 'course',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});
var Course = mongoose_1.model('Course', exports.CourseSchema);
exports.default = Course;
