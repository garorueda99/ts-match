"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var _a = dateString
        .split('/')
        .map(function (ele) { return parseInt(ele); })
        .reverse(), year = _a[0], month = _a[1], day = _a[2];
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
