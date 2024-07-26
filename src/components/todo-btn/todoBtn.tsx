import React, { useState, useReducer } from 'react';
import Check from '../../assets/Check.svg';
import Trash from '../../assets/TrashSimple.svg';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error();
  }
}

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({
        type: 'add',
        payload: { id: Date.now(), text: inputValue, completed: false },
      });
      setInputValue('');
    }
  };

  return (
    <div className="mt-[50px] w-[80%] mx-auto my-0">
      <div className="h-[40px] flex justify-between items-center">
        <div className="w-[85%] h-[100%]">
          <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-[100%] outline-none bg-transparent h-[100%] rounded-xl flex items-center pl-4 border border-solid border-[rgba(158,120,207,1)] text-base font-normal leading-[19.36px] text-left text-[rgba(119,119,119,1)]"
          />
        </div>
        <div className="w-[10%] h-full flex items-center justify-center">
          <button
            type="button"
            onClick={handleAddTodo}
            className="w-[100%] h-full pb-2 flex justify-center font-light items-center text-[42px] text-white bg-[rgba(158,120,207,1)] rounded-xl"
          >
            +
          </button>
        </div>
      </div>
      <ul className="mt-[50px]">
        {state.map((todo) => (
          <li
            key={todo.id}
            className={`w-[100%] h-[50px] flex justify-between items-center rounded-lg p-2 mb-2 
              ${todo.completed ? 'bg-[rgba(21,16,28,1)] text-[rgba(0,255,0,1)] line-through' : 'bg-[rgba(21,16,28,1)] text-[rgba(158,120,207,1)]'}`}
          >
            <span
              className="flex-1"
              onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
            >
              {todo.text}
            </span>
            <div className="flex items-center">
              <button
                onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
                className="mr-2"
              >
                <img src={Check} alt="Toggle" />
              </button>
              <button
                onClick={() => dispatch({ type: 'delete', payload: todo.id })}
              >
                <img src={Trash} alt="Delete" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
