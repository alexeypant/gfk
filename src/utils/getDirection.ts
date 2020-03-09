import { EMoveDirection } from '../enums/EMoveDirection';


export const getDirection = (index: number): EMoveDirection => {
  switch (index) {
    case 0: return EMoveDirection.north;
    case 1: return EMoveDirection.east;
    case 2: return EMoveDirection.south;
    case 3: return EMoveDirection.west;
    default: return EMoveDirection.west;
  }
}
