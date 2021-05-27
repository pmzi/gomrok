import fs from 'fs';
import path from 'path';
import { IStrategy, StrategyRunnerOutputStatusEnum, StrategyOutput } from './shared/types';

const sourceMapFileNameReg = /\.map$/i;

function checkForSourceMapLeak(src: string): StrategyOutput {
  if (!fs.lstatSync(src).isDirectory()) return [];
  const filesInsideSrc = fs.readdirSync(src);

  const result: StrategyOutput = [];

  for (const fileName of filesInsideSrc) {
    const fullFilePath = path.resolve(src, fileName);

    if (fs.lstatSync(fullFilePath).isDirectory()) {
      result.push(...checkForSourceMapLeak(fullFilePath));
    } else if (sourceMapFileNameReg.test(fileName)) {
      result.push({
        name: fullFilePath,
        description: 'Sourcemap leak detected!',
        status: StrategyRunnerOutputStatusEnum.Medium,
      });
    }
  }

  return result;
}

const toBeExported: IStrategy = {
  name: 'sourceMapLeak',
  description: 'This strategy checks whether any source maps are leaked or not.',
  async run({ src }) {
    return checkForSourceMapLeak(src);
  },
};

export default toBeExported;
