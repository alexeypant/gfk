export interface IChipModel {
  uuid: string;
  xStart: number;
  yStart: number;
  movingFn: (x: number, y: number) => {x: number; y: number};
  content: string;
}
