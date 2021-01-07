"use strict";
// import fs from 'fs';
Object.defineProperty(exports, "__esModule", { value: true });
// const matches = fs
//   .readFileSync('football.csv', { encoding: 'utf-8' })
//   .split('\n')
//   .map((row: string): string[] => row.split(','));
//Times Man United has won a game
// const reducer = matches.reduce((acc, current) => {
//   (current[1] === 'Man United' && current[5] === 'H') ||
//   (current[2] === 'Man United' && current[5] === 'A')
//     ? acc++
//     : '';
//   return acc;
// }, 0);
// console.log(reducer);
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var reducer = reader.data.reduce(function (acc, current) {
    (current[1] === 'Man United' && current[5] === MatchResult.HomeWin) ||
        (current[2] === 'Man United' && current[5] === MatchResult.AwayWin)
        ? acc++
        : '';
    return acc;
}, 0);
console.log(reducer);
