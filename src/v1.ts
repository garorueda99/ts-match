import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

// Times Man United has won a game

const reducer = matches.reduce((acc, current) => {
  (current[1] === 'Man United' && current[5] === 'H') ||
  (current[2] === 'Man United' && current[5] === 'A')
    ? acc++
    : '';
  return acc;
}, 0);

console.log(reducer);

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const reducer2 = matches.reduce((acc, current) => {
  (current[1] === 'Man United' && current[5] === MatchResult.HomeWin) ||
  (current[2] === 'Man United' && current[5] === MatchResult.AwayWin)
    ? acc++
    : '';
  return acc;
}, 0);

console.log(reducer2);
