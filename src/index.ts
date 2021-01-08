import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

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
const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();
const result = matchReader.matches.reduce((acc, current) => {
  (current[1] === 'Man United' && current[5] === MatchResult.HomeWin) ||
  (current[2] === 'Man United' && current[5] === MatchResult.AwayWin)
    ? acc++
    : '';
  return acc;
}, 0);
console.log(result);
