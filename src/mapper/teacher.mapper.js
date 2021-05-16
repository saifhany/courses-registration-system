"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapTeacherStudents = void 0;
var MapTeacherStudents = /** @class */ (function () {
    function MapTeacherStudents() {
    }
    MapTeacherStudents.mapOne = function (course, courseList) {
        try {
            var profStudentsList = {};
            profStudentsList.course = course;
            console.log(courseList[0]);
            for (var _i = 0, courseList_1 = courseList; _i < courseList_1.length; _i++) {
                var student = courseList_1[_i];
                console.log(student.studentId.name);
                console.log(student.studentId.username);
                profStudentsList.student.push({
                    name: student.studentId.name,
                    userName: student.studentId.username
                });
            }
            // console.log('t', profStudentsList);
            return profStudentsList;
        }
        catch (error) {
            return error;
        }
    };
    MapTeacherStudents.mapMany = function (objList) {
        try {
            return objList.map(function (obj) {
                MapTeacherStudents.mapOne(obj.course, obj.student);
            });
        }
        catch (error) {
            return error;
        }
    };
    return MapTeacherStudents;
}());
exports.MapTeacherStudents = MapTeacherStudents;
