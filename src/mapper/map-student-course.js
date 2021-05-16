"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapStudentCourse = void 0;
var MapStudentCourse = /** @class */ (function () {
    function MapStudentCourse() {
    }
    MapStudentCourse.map = function (studentCourseList) {
        for (var _i = 0, studentCourseList_1 = studentCourseList; _i < studentCourseList_1.length; _i++) {
            var course = studentCourseList_1[_i];
            console.log(course);
            course.studentId.accessToken = undefined;
            course.studentId._id = undefined;
            course.studentId.createdAt = undefined;
            course.studentId.updatedAt = undefined;
            course.studentId.courses = undefined;
            course.studentId.password = undefined;
            course.courseId.fullMark = undefined;
            course.courseId.createdAt = undefined;
            course.courseId.updatedAt = undefined;
        }
        return studentCourseList;
    };
    return MapStudentCourse;
}());
exports.MapStudentCourse = MapStudentCourse;
