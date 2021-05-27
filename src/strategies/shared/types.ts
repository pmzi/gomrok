export enum StrategyRunnerOutputStatusEnum {
  Critical = 'Critical',
  Medium = 'Medium',
  Low = 'Low',
}

interface IStrategySingleOutput {
  name: string;
  status: StrategyRunnerOutputStatusEnum;
  description: string;
}

export type StrategyOutput = IStrategySingleOutput[];

export interface IStrategy {
  run: ({ src }: { src: string }) => Promise<StrategyOutput>;
  name: string;
  description: string;
}
