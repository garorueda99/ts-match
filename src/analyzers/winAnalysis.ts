import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResult';
export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    const result = matches.reduce((acc, current) => {
      (current[1] === this.team && current[5] === MatchResult.HomeWin) ||
      (current[2] === this.team && current[5] === MatchResult.AwayWin)
        ? acc++
        : '';
      return acc;
    }, 0);
    return `Team ${this.team} won ${result}`;
  }
}
