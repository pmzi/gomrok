import { StrategyRunnerOutputStatusEnum } from '../shared/types';

interface IDataPattern {
  pattern: RegExp;
  filePattern?: RegExp;
  description: (dataExposed: string) => string;
  status: StrategyRunnerOutputStatusEnum,
}

type DataPatternsType = IDataPattern[];

const dataPatterns: DataPatternsType = [
  {
    pattern: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
    description: (dataExposed) => `Any JWT tokens should be removed from production code! ${dataExposed} found! `,
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
];

export default dataPatterns;
