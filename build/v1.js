"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(function (row) { return row.split(','); });
// Times Man United has won a game
var reducer = matches.reduce(function (acc, current) {
    (current[1] === 'Man United' && current[5] === 'H') ||
        (current[2] === 'Man United' && current[5] === 'A')
        ? acc++
        : '';
    return acc;
}, 0);
console.log(reducer);
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var reducer2 = matches.reduce(function (acc, current) {
    (current[1] === 'Man United' && current[5] === MatchResult.HomeWin) ||
        (current[2] === 'Man United' && current[5] === MatchResult.AwayWin)
        ? acc++
        : '';
    return acc;
}, 0);
console.log(reducer2);
