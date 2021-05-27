import fs from 'fs';
import path from 'path';
import { IStrategy, StrategyOutput } from '../../shared/types';

import dataPatterns from './dataPattern';

function checkForDataExposure(src: string): StrategyOutput {
  if (!fs.lstatSync(src).isDirectory()) return [];
  const filesInsideSrc = fs.readdirSync(src);

  const result: StrategyOutput = [];

  for (const fileName of filesInsideSrc) {
    const fullFilePath = path.resolve(src, fileName);

    const isDirectory = fs.lstatSync(fullFilePath).isDirectory();

    if (isDirectory) {
      result.push(...checkForDataExposure(fullFilePath));
    } else {
      const fileContent = fs.readFileSync(fullFilePath, { encoding: 'utf-8' });

      dataPatterns.forEach(({
        pattern, filePattern, description, status,
      }) => {
        if (
          (!filePattern || filePattern.test(fileName))
          && pattern.test(fileContent)
        ) {
          const [dataExposed] = pattern.exec(fileContent) as RegExpExecArray;
          if (pattern.test(fileContent)) {
            result.push({
              name: fileName,
              description: description(dataExposed),
              status,
            });
          }
        }
      });
    }
  }

  return result;
}

const toBeExported: IStrategy = {
  name: 'sensitiveDataExposure',
  description: 'This strategy checks whether any sensitive data are leaked or not.',
  async run({ src }) {
    return checkForDataExposure(src);
  },
};

export default toBeExported;
