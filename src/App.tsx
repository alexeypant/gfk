import React, { useRef } from 'react';
import './App.css';
import { Layout } from 'antd';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSize } from 'react-hook-size/dist';
import { Playground } from './containers/playground/Playground';
import { Game } from './containers/game/Game';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  let referenceToField = useRef();
  let { width: fieldWidth, height: fieldHeight } = useSize(referenceToField);

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light">Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <DndProvider backend={Backend}>
            <Content>
              <Playground refToElement={referenceToField}>
                {fieldWidth && fieldHeight ? <Game fieldHeight={fieldHeight} fieldWidth={fieldWidth} /> : undefined}
              </Playground>
            </Content>
          </DndProvider>
          <Footer/>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
