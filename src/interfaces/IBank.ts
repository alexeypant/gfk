import { ReactNode } from 'react';

export interface IBank {
  uuid: string;
  isFull: boolean;
  model: ReactNode;
  modelFull: ReactNode;
}
