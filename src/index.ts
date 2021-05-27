import { StrategyResult, StrategyRunnerOutputStatusEnum } from './shared/types';
import strategyRunner from './strategies';

interface IEntry {
  src: string;
}

export {
  StrategyRunnerOutputStatusEnum,
  StrategyResult,
};

export default async function analyze({
  src,
}: IEntry): Promise<StrategyResult> {
  return strategyRunner({ src });
}
