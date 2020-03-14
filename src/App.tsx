import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { defaultState } from './redux/store/initialState';
import { MultiplicationGame } from './containers/multiplicationGame/MultiplicationGame';
import { useSize } from 'react-hook-size/dist';
import { Playground } from './containers/playground/Playground';
import { StyledContainer } from './App.style';


const App = () => {
  const referenceToField = useRef();
  const { width, height } = useSize(referenceToField);
  const reducer = combineReducers({ ...rootReducer});
  const store = createStore(reducer, defaultState);
  return (
    <StyledContainer>
      <Provider store={store}>
        <Playground refToElement={referenceToField}>
          {width && height ? <MultiplicationGame width={width} height={height}/> : undefined}
        </Playground>
      </Provider>
    </StyledContainer>
  );
};

export default App;
