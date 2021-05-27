import { FileTypeEnum } from './shared/types';
import { StrategyRunnerOutputStatusEnum } from '../../shared/types';

interface IFilePattern {
  pattern: RegExp;
  type: FileTypeEnum;
  description: string;
  status: StrategyRunnerOutputStatusEnum,
}

type FilePatternsType = IFilePattern[];

const filePatterns: FilePatternsType = [
  {
    pattern: /^\..*$/i,
    type: FileTypeEnum.FileOrFolder,
    description: 'Any hidden files/folders should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /^_.*$/i,
    type: FileTypeEnum.FileOrFolder,
    description: 'Any underscored files/folders should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /_$/i,
    type: FileTypeEnum.FileOrFolder,
    description: 'Any files/folders ending with underline should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.(tar|tar\.gz|zip|rar)$/i,
    type: FileTypeEnum.File,
    description: 'Any compressed files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.cgi$/i,
    type: FileTypeEnum.File,
    description: 'Any "cgi" files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.(conf|config)$/i,
    type: FileTypeEnum.File,
    description: 'Any config files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /~$/i,
    type: FileTypeEnum.File,
    description: 'Any files ending with "~" should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.log$/i,
    type: FileTypeEnum.File,
    description: 'Any log files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.caches?$/i,
    type: FileTypeEnum.File,
    description: 'Any cache files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /^caches?$/i,
    type: FileTypeEnum.Folder,
    description: 'Any cache folders should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.json$/i,
    type: FileTypeEnum.File,
    description: 'You should be careful about json files.',
    status: StrategyRunnerOutputStatusEnum.Medium,
  },
  {
    pattern: /\.yml$/i,
    type: FileTypeEnum.File,
    description: 'You should be careful about yml files.',
    status: StrategyRunnerOutputStatusEnum.Medium,
  },
  {
    pattern: /\.xml$/i,
    type: FileTypeEnum.File,
    description: 'You should be careful about xml files.',
    status: StrategyRunnerOutputStatusEnum.Medium,
  },
  {
    pattern: /\.lock$/i,
    type: FileTypeEnum.File,
    description: 'Any lock files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.ini$/i,
    type: FileTypeEnum.File,
    description: 'Any ini files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.inc$/i,
    type: FileTypeEnum.File,
    description: 'Any inc files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.sql$/i,
    type: FileTypeEnum.File,
    description: 'Any sql files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.(sh|bat)$/i,
    type: FileTypeEnum.File,
    description: 'Any bash files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.data$/i,
    type: FileTypeEnum.File,
    description: 'Any data files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.md$/i,
    type: FileTypeEnum.File,
    description: 'Any md files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Low,
  },
  {
    pattern: /\.(sqlite|sqlite3)$/i,
    type: FileTypeEnum.File,
    description: 'Any sqlite files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.(csv|xls)$/i,
    type: FileTypeEnum.File,
    description: 'Any csv files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.mdb$/i,
    type: FileTypeEnum.File,
    description: 'Any mdb files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.db$/i,
    type: FileTypeEnum.File,
    description: 'Any db files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.(tmp|temp)$/i,
    type: FileTypeEnum.File,
    description: 'Any temp files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.(ts|tsx)$/i,
    type: FileTypeEnum.File,
    description: 'Any ts files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Low,
  },
  {
    pattern: /\.jsx$/i,
    type: FileTypeEnum.File,
    description: 'Any jsx files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Low,
  },
  {
    pattern: /\.coffee$/i,
    type: FileTypeEnum.File,
    description: 'Any coffee files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Low,
  },
  {
    pattern: /\.sample$/i,
    type: FileTypeEnum.File,
    description: 'Any sample files should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Medium,
  },
  {
    pattern: /^logs$/i,
    type: FileTypeEnum.Folder,
    description: 'Any log folders should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /^tmp|temp$/i,
    type: FileTypeEnum.Folder,
    description: 'Any temp folders should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
  {
    pattern: /\.passwd$/i,
    type: FileTypeEnum.File,
    description: 'Any passwd folders should be removed in production.',
    status: StrategyRunnerOutputStatusEnum.Critical,
  },
];

export default filePatterns;
