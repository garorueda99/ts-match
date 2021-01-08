"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
//REFACTOR 1
// const reader = new MatchReader('football.csv');
// reader.read();
// const result = reader.data.reduce((acc, current) => {
//   (current[1] === 'Man United' && current[5] === MatchResult.HomeWin) ||
//   (current[2] === 'Man United' && current[5] === MatchResult.AwayWin)
//     ? acc++
//     : '';
//   return acc;
// }, 0);
// console.log(result );
// reader.data.map((x) => console.log(x));
//REFACTOR 2
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
matchReader.load();
var result = matchReader.matches.reduce(function (acc, current) {
    (current[1] === 'Man United' && current[5] === MatchResult_1.MatchResult.HomeWin) ||
        (current[2] === 'Man United' && current[5] === MatchResult_1.MatchResult.AwayWin)
        ? acc++
        : '';
    return acc;
}, 0);
console.log(result);
