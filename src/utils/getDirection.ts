import { EMoveDirection } from '../enums/EMoveDirection';


export const getDirection = (index: number): EMoveDirection => {
  switch (index) {
    case 0: return EMoveDirection.north;
    case 1: return EMoveDirection.east;
    case 2: return EMoveDirection.south;
    case 3: return EMoveDirection.west;
    case 4: return EMoveDirection.northEast;
    case 5: return EMoveDirection.southEast;
    case 6: return EMoveDirection.southWest;
    case 7: return EMoveDirection.northWest;
    default: return EMoveDirection.west;
  }
}
