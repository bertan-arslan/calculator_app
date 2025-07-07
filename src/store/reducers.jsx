import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  EQUALS,
  MEMORY_ADD,
  MEMORY_TRANSFER,
  MEMORY_CLEAR,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  currentInput: '',
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      if (state.currentInput !== '0') {
        return {
          ...state,
          currentInput: state.currentInput + action.payload.toString(),
        };
      } else {
        return {
          ...state,
          currentInput: action.payload.toString(),
        };
      }

    case CHANGE_OPERATION:
      if (state.currentInput !== '') {
        const inputNumber = Number(state.currentInput);
        const newTotal =
          state.total === 0
            ? inputNumber
            : calculateResult(state.total, inputNumber, state.operation);
        return {
          ...state,
          total: newTotal,
          operation: action.payload,
          currentInput: '0',
        };
      }
      return {
        ...state,
        operation: action.payload,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        currentInput: '',
      };

    case EQUALS:
      if (state.currentInput === '') {
        return state;
      } else {
        const inputNumber = Number(state.currentInput);
        const newTotal =
          state.total === 0
            ? inputNumber
            : calculateResult(state.total, inputNumber, state.operation);
        return {
          ...state,
          total: newTotal,
          currentInput: '',
        };
      }

    case MEMORY_ADD:
      return {
        ...state,
        memory:
          state.currentInput !== '' ? Number(state.currentInput) : state.total,
      };

    case MEMORY_TRANSFER:
      return { ...state, currentInput: state.memory.toString() };

    case MEMORY_CLEAR:
      return { ...state, memory: 0 };

    default:
      return state;
  }
};

export default reducer;
