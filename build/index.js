"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
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
// const matchReader = new MatchReader(new CsvFileReader('football.csv'));
// matchReader.load();
// const result = matchReader.matches.reduce((acc, current) => {
//   (current[1] === 'Man United' && current[5] === MatchResult.HomeWin) ||
//   (current[2] === 'Man United' && current[5] === MatchResult.AwayWin)
//     ? acc++
//     : '';
//   return acc;
// }, 0);
// console.log(result);
//REFACTOR 3
// const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
// const summary = new Summary(new WinAnalysis('Man United'), new HtmlReport());
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
