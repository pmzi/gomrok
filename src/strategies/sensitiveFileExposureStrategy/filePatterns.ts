import { FileTypeEnum } from './shared/types';
import { StrategyRunnerOutputStatusEnum } from '../shared/types';

interface IFilePattern {
  pattern: RegExp;
  type: FileTypeEnum;
  description: string;
  status: StrategyRunnerOutputStatusEnum,
}

type FilePatternsType = IFilePattern[];

const filePatterns: FilePatternsType = [
  {
    pattern: /^\..*$/,
    type: FileTypeEnum.FileOrFolder,
    description: 'Any hidden files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
];

export default filePatterns;
