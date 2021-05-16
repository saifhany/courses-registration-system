"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCourseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.StudentCourseSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Student" },
    courseId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course" },
    gpa: { type: Number },
}, {
    collection: 'student-course',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});
var StudentCourse = mongoose_1.model('StudentCourse', exports.StudentCourseSchema);
exports.default = StudentCourse;
