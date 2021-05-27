import chalk from 'chalk';
import { StrategyResult, StrategyRunnerOutputStatusEnum } from './src';

interface IExportEntry {
  isTable?: boolean;
  result: StrategyResult,
}

interface IExportStrategy {
  (result: StrategyResult): void;
}

const statusColorMap = {
  [StrategyRunnerOutputStatusEnum.Critical]: 'red.bold',
  [StrategyRunnerOutputStatusEnum.Medium]: 'yellow.bold',
  [StrategyRunnerOutputStatusEnum.Low]: 'green.bold',
};

const exportToConsoleAsTable: IExportStrategy = (result) => {
  Object.entries(result).forEach(
    ([strategyName, strategyResults]) => {
      console.log(`{blue.bold ${strategyName}:`);
      console.table(strategyResults);
    },
  );
};

const exportToConsoleAsRows: IExportStrategy = (result) => {
  Object.entries(result).forEach(([strategyName, strategyResults]) => {
    console.log('\n', chalk.blue.bold(`${strategyName}:`));
    strategyResults.forEach((strategyResult) => {
      console.log(chalk`{magenta.bold ${strategyResult.name}} ({${statusColorMap[strategyResult.status]} ${strategyResult.status}}): ${strategyResult.description}`);
    });
  });
};

export default function doExport({
  isTable,
  result,
}: IExportEntry): void {
  if (isTable) {
    exportToConsoleAsTable(result);
  } else {
    exportToConsoleAsRows(result);
  }
}
