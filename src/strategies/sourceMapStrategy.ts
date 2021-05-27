import { IStrategy, StrategyRunnerOutputStatusEnum } from './shared/types';

const toBeExported: IStrategy = {
  name: '',
  description: '',
  async run({ src }) {
    return [{
      name: src,
      description: 'salam',
      status: StrategyRunnerOutputStatusEnum.Critical,
    }];
  },
};

export default toBeExported;
