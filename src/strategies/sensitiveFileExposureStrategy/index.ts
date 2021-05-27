import fs from 'fs';
import path from 'path';
import { IStrategy, StrategyOutput } from '../../shared/types';
import { FileTypeEnum } from './shared/types';

import filePatterns from './filePatterns';

function checkForFileExposure(src: string): StrategyOutput {
  if (!fs.lstatSync(src).isDirectory()) return [];
  const filesInsideSrc = fs.readdirSync(src);

  const result: StrategyOutput = [];

  for (const fileName of filesInsideSrc) {
    const fullFilePath = path.resolve(src, fileName);

    const isDirectory = fs.lstatSync(fullFilePath).isDirectory();
    const isFile = !isDirectory;

    filePatterns.forEach(({
      pattern, type, description, status,
    }) => {
      if (
        (type === FileTypeEnum.Folder && isDirectory)
        || (type === FileTypeEnum.File && isFile)
        || (type === FileTypeEnum.FileOrFolder)
      ) {
        if (pattern.test(fileName)) {
          result.push({
            name: fullFilePath,
            description,
            status,
          });
        }
      }
    });

    if (isDirectory) {
      result.push(...checkForFileExposure(fullFilePath));
    }
  }

  return result;
}

const toBeExported: IStrategy = {
  name: 'sensitiveFileExposure',
  description: 'This strategy checks whether any sensitive files/folders are leaked or not.',
  async run({ src }) {
    return checkForFileExposure(src);
  },
};

export default toBeExported;
