import { EMoveDirection } from '../enums/EMoveDirection';
import { stepsInFullHeight, stepsInFullWidth } from '../constants/gameConfig';

const directionThresholdMap = {
  [EMoveDirection.north]: { x: 0.6, y: 0.01 },
  [EMoveDirection.east]: { x: 0.01, y: 0.6 },
  [EMoveDirection.south]: { x: 0.4, y: 0.99 },
  [EMoveDirection.west]: { x: 0.99, y: 0.4 },
  [EMoveDirection.northEast]: { x: 0.01, y: 0.01 },
  [EMoveDirection.southEast]: { x: 0.01, y: 0.99 },
  [EMoveDirection.southWest]: { x: 0.99, y: 0.99 },
  [EMoveDirection.northWest]: { x: 0.99, y: 0.01 },
};

const oppositeDirectionMap = {
  [EMoveDirection.north]: EMoveDirection.south,
  [EMoveDirection.east]: EMoveDirection.west,
  [EMoveDirection.south]: EMoveDirection.north,
  [EMoveDirection.west]: EMoveDirection.east,
  [EMoveDirection.northEast]: EMoveDirection.southWest,
  [EMoveDirection.southEast]: EMoveDirection.northWest,
  [EMoveDirection.southWest]: EMoveDirection.northEast,
  [EMoveDirection.northWest]: EMoveDirection.southEast,
};

const uuidToDirectionMap = new Map();
const getDirection = (uuid: string, initialDirection: EMoveDirection, isAtBorder: boolean) => {
  const currentDirection: EMoveDirection = uuidToDirectionMap.has(uuid) ? uuidToDirectionMap.get(uuid) : initialDirection;
  if (isAtBorder) {
    const oppositeDirection = oppositeDirectionMap[currentDirection];
    uuidToDirectionMap.set(uuid, oppositeDirection);
    return oppositeDirection;
  } else {
    return currentDirection;
  }

};

export const getNextPosition = (
    x: number,
    y: number,
    mainDirection: EMoveDirection,
    xMax: number,
    yMax: number,
    uuid: string
): {x: number; y: number} => {
  const relativeCurrentX = x;
  const relativeCurrentY = y;
  const relativeStepX = xMax / stepsInFullWidth;
  const relativeStepY = yMax / stepsInFullHeight;

  const isAtBorder = relativeCurrentX < 5 || relativeCurrentX > 95 || relativeCurrentY < 5 || relativeCurrentY > 95;
  const direction = getDirection(uuid, mainDirection, isAtBorder);

  const { x: thresholdX, y: thresholdY } = directionThresholdMap[direction];
  const newX = Math.random() > thresholdX ? x + relativeStepX : x - relativeStepX;
  const newY = Math.random() > thresholdY ? y + relativeStepY : y - relativeStepY;
  return {x: newX, y: newY };
};
