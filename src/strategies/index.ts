import { IStrategy, StrategyResult } from '../shared/types';

import sourceMapStrategy from './sourceMapStrategy';
import sensitiveFileExposureStrategy from './sensitiveFileExposureStrategy';
import sensitiveDataExposureStrategy from './sensitiveDataExposureStrategy';

type StrategyRunnerOutput = Promise<StrategyResult>

interface IStrategyMap {
  [index: string]: IStrategy;
}

const strategyNameMap: IStrategyMap = {
  [sourceMapStrategy.name]: sourceMapStrategy,
  [sensitiveFileExposureStrategy.name]: sensitiveFileExposureStrategy,
  [sensitiveDataExposureStrategy.name]: sensitiveDataExposureStrategy,
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
