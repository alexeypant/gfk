import { EMoveDirection } from '../enums/EMoveDirection';
import { step } from '../constants/gameConfig';

const directionThresholdMap = {
  [EMoveDirection.north]: { x: 0.5, y: 0.15 },
  [EMoveDirection.east]: { x: 0.15, y: 0.5 },
  [EMoveDirection.south]: { x: 0.5, y: 0.85 },
  [EMoveDirection.west]: { x: 0.85, y: 0.5 },
};

const detectStop = (x: number, y: number, mainDirection: EMoveDirection, xMax: number, yMax: number) => {
  return (mainDirection === EMoveDirection.north && y > yMax - 2 * step)
      || (mainDirection === EMoveDirection.east && x > xMax - 2 * step)
      || (mainDirection === EMoveDirection.south && y < 2 * step)
      || (mainDirection === EMoveDirection.west && x < 2 * step)
};

export const getNextPosition = (x: number, y: number, mainDirection: EMoveDirection, xMax: number, yMax: number): {x: number; y: number} => {
  const isStop = detectStop(x, y, mainDirection, xMax, yMax);
  if (isStop) {
    return {x, y};
  }
  const { x: thresholdX, y: thresholdY } = directionThresholdMap[mainDirection];
  const newX = Math.random() > thresholdX ? x + step : x - step;
  const newY = Math.random() > thresholdY ? y + step : y - step;
  return {x: newX, y: newY };
};
