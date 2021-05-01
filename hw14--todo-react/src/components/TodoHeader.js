import React from 'react';
import Time from './Time';

function TodoHeader({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputSubmitHandler = (e) => {
    if (e.key === 'Enter') {
      if (inputText === '') {
        alert('To-do için açıklama girilmedi.');
      } else {
        let todo = {
          id: todos.length + 1,
          text: inputText,
          isCompleted: false,
        };
        setTodos([...todos, todo]);
      }
      setInputText('');
    }
  };

  const clearTodos = () => {
    setTodos([]);
    localStorage.clear();
  };

  return (
    <div className="todo-header">
      <div className="todo-header-top">
        <Time />
        <button onClick={clearTodos} className="clear-button">
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
      <input
        autoFocus
        className="input"
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        onKeyDown={inputSubmitHandler}
        placeholder="Bugün neler yapmak istiyorsun?"
      ></input>
    </div>
  );
}

export default TodoHeader;
