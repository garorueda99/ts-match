import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const reducer = reader.data.reduce((acc, current) => {
  (current[1] === 'Man United' && current[5] === MatchResult.HomeWin) ||
  (current[2] === 'Man United' && current[5] === MatchResult.AwayWin)
    ? acc++
    : '';
  return acc;
}, 0);

console.log(reducer);
