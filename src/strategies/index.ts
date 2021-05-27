import { StrategyOutput, IStrategy } from './shared/types';

import sourceMapStrategy from './sourceMapStrategy';

interface StrategyResult {
  [index: string]: StrategyOutput
}
type StrategyRunnerOutput = Promise<StrategyResult>

interface IStrategyMap {
  [index: string]: IStrategy;
}

const strategyNameMap: IStrategyMap = {
  [sourceMapStrategy.name]: sourceMapStrategy,
};

export default async function strategyRunner({ src }: { src: string; }): StrategyRunnerOutput {
  const strategies = Object.values(strategyNameMap);

  const result: StrategyResult = {};

  for (const strategy of strategies) {
    const strResult = await strategy.run({ src });

    result[strategy.name] = strResult;
  }

  return result;
}
