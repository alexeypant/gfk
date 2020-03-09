import React, { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { EItemTypes } from '../../constants/EItemTypes';
import { StyledBank } from './Bank.style';

export interface IBankProps {
  uuid: string;
  label?: string;
  children?: ReactNode;
  onDrop: (item: any, bankUuid: string) => void;
}
export const Bank = ({ uuid, label, children, onDrop}: IBankProps) => {
  const [, drop] = useDrop({
    accept: EItemTypes.cockroach,
    drop: (draggedObject) => onDrop(draggedObject, uuid),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return <StyledBank className={'bank'} ref={drop}>
    {label && <span>{label}</span>}
    {children}
  </StyledBank>
};
