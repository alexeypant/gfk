import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { EItemTypes } from '../../constants/EItemTypes';
import { StyledDiv } from './Cockroach.style';
import { easeElastic } from 'd3-ease';
import { Animate } from 'react-move';
import { useTime } from '../../hooks/useTime';

export interface ICockroach {
  uuid: string;
  xStart: number;
  yStart: number;
  movingFn: (x: number, y: number) => {x: number; y: number};
  content: string;
}

export const Cockroach = ({ uuid, xStart, yStart, movingFn, content }: ICockroach) => {
  const [{isDragging}, drag] = useDrag({
    item: {
      type: EItemTypes.cockroach,
      uuid: uuid,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const [isHover, setIsHover] = useState(false);
  const now = useTime();
  const [x, setX] = useState<number>(xStart);
  const [y, setY] = useState<number>(yStart);
  useEffect(() => {
    const { x: newX, y: newY } = movingFn(x, y);
    !isHover && setX(newX);
    !isHover && setY(newY);
  }, [now]);
  return (
      <Animate
          start={{ x: x, y: y, }}
          update={{
            x: [x],
            y: [y],
            timing: { duration: 3000, ease: easeElastic },
          }}
      >
        {({x, y}) => (
            <StyledDiv
                ref={drag}
                style={{
                  position: 'absolute',
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  opacity: isDragging ? 0 : 1,
                  backgroundColor: '#ff69b4',
                  left: `${x}%`,
                  bottom: `${y}%`,
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >{content}</StyledDiv>
        )
        }
      </Animate>
  );
};
