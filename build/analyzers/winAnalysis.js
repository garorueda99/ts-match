"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matches) {
        var _this = this;
        var result = matches.reduce(function (acc, current) {
            (current[1] === _this.team && current[5] === MatchResult_1.MatchResult.HomeWin) ||
                (current[2] === _this.team && current[5] === MatchResult_1.MatchResult.AwayWin)
                ? acc++
                : '';
            return acc;
        }, 0);
        return "Team " + this.team + " won " + result;
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
