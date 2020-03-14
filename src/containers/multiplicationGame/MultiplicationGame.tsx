import React, { useEffect, useRef } from 'react';
import { BaseSelector } from '../baseSelector/BaseSelector';
import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { StyledLayout } from './MultiplicationGame.style';
import { useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/IRootState';
import { useGame } from '../../hooks/useGame';
import { Cockroach } from '../cockroach/Cockroach';
import { Shelter } from '../shelter/Shelter';
import { Field } from '../field/Filed';

const { Sider, Content } = Layout;

export interface IMultiplicationGameProps {
  height: number;
  width: number;
}

const ChipModel: any = Cockroach;

export const MultiplicationGame = ({ width, height}: IMultiplicationGameProps) => {
  const fieldHeight = height * 0.8;
  const shelterHeight = height * 0.2;

  const base = useSelector<IRootState, number>(state => state.multiplication.base);
  const { chips, banks, updateGame } = useGame(width, fieldHeight, base, ChipModel);
  useEffect(() => updateGame(base), [base]);
  return (
      <StyledLayout>
        <Sider theme="light"><BaseSelector /></Sider>
          <DndProvider backend={Backend}>
            <Layout>
              <Content style={{height: fieldHeight}}>
                <Field >
                  {chips.map(chip => chip.model)}
                </Field>
              </Content>
              <Content style={{height: shelterHeight}}>
                <Shelter>
                  {banks.map(bank => bank.isFull ? bank.modelFull : bank.model)}
                </Shelter>
              </Content>
            </Layout>
          </DndProvider>
      </StyledLayout>
  );
};
