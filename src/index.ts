import strategyRunner from './strategies';

interface IEntry {
  src: string;
}

export default async function analyze({
  src,
}: IEntry): Promise<void> {
  console.log(await strategyRunner({ src }));
}
