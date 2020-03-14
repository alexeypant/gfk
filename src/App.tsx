import React, { useRef, useState } from 'react';
import './App.css';
import { Layout } from 'antd';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSize } from 'react-hook-size/dist';
import { Playground } from './containers/playground/Playground';
import { Game } from './containers/game/Game';
import { BaseSelector } from './containers/baseSelector/BaseSelector';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { defaultState } from './redux/store/initialState';

const { Sider, Content } = Layout;

const App = () => {
  let referenceToField = useRef();
  let { width: fieldWidth, height: fieldHeight } = useSize(referenceToField);

  const reducer = combineReducers({ ...rootReducer});
  const store = createStore(reducer, defaultState);

  return (
      <Provider store={store}>
        <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
            <Sider theme="light"><BaseSelector /></Sider>
            <Layout>
              <DndProvider backend={Backend}>
                <Content>
                  <Playground refToElement={referenceToField}>
                    {fieldWidth && fieldHeight ? <Game fieldHeight={fieldHeight} fieldWidth={fieldWidth} /> : undefined}
                  </Playground>
                </Content>
              </DndProvider>
            </Layout>
          </Layout>
        </div>
      </Provider>
  );
};

export default App;
