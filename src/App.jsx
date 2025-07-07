import React, { useReducer } from 'react';

import reducer, { initialState } from './store/reducers';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  equals,
  memoryAdd,
  memoryTransfer,
  memoryClear,
} from './store/actions';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';

function App() {
  const [state, dispatchState] = useReducer(reducer, initialState);

  const numberHandle = (number) => {
    dispatchState(applyNumber(number));
  };

  const operationHandle = (operation) => {
    dispatchState(changeOperation(operation));
  };

  const clearHandle = () => {
    dispatchState(clearDisplay());
  };

  const equalHandle = () => {
    dispatchState(equals());
  };

  const memoryPlus = () => {
    dispatchState(memoryAdd());
  };

  const memoryR = () => {
    dispatchState(memoryTransfer());
  };

  const memoryC = () => {
    dispatchState(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.currentInput || state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={() => memoryPlus()} />
              <CalcButton value={'MR'} onClick={() => memoryR()} />
              <CalcButton value={'MC'} onClick={() => memoryC()} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={() => numberHandle(1)} />
              <CalcButton value={2} onClick={() => numberHandle(2)} />
              <CalcButton value={3} onClick={() => numberHandle(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => numberHandle(4)} />
              <CalcButton value={5} onClick={() => numberHandle(5)} />
              <CalcButton value={6} onClick={() => numberHandle(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => numberHandle(7)} />
              <CalcButton value={8} onClick={() => numberHandle(8)} />
              <CalcButton value={9} onClick={() => numberHandle(9)} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={() => operationHandle('+')} />
              <CalcButton value={0} onClick={() => numberHandle(0)} />
              <CalcButton value={'-'} onClick={() => operationHandle('-')} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={() => operationHandle('*')} />
              <CalcButton value={'/'} onClick={() => operationHandle('/')} />
              <CalcButton value={'CE'} onClick={() => clearHandle()} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={() => equalHandle()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
