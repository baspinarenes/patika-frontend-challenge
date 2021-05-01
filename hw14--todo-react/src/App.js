import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.scss';
import Todo from './components/Todo';
import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import {
  SwipeableList,
  SwipeableListItem,
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 380);
  }, [isMobile]);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  useEffect(() => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case 'nompleted':
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, filter]);

  return useMediaQuery() > 450 ? (
    <div className="App">
      <TodoHeader
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="todo-body">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              isMobile={false}
            />
          ))}
        </ul>
      </div>
      <TodoFooter setFilter={setFilter} />
    </div>
  ) : (
    <div className="App">
      <TodoHeader
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="todo-body-mobile">
        <ul className="todo-list">
          <SwipeableList threshold={0.9}>
            {filteredTodos.map((todo) => (
              <SwipeableListItem
                scrollStartThreshold={'2'}
                swipeStartThreshold={'2'}
                swipeLeft={{
                  content: <div className="swipe-left">Sil</div>,
                  action: () =>
                    setTodos(
                      todos.filter((todoItem) => todoItem.id !== todo.id)
                    ),
                }}
                onSwipeProgress={(progress) =>
                  console.info(`Swipe progress: ${progress}%`)
                }
              >
                <Todo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  isMobile={true}
                />
              </SwipeableListItem>
            ))}
          </SwipeableList>
        </ul>
      </div>
      <TodoFooter setFilter={setFilter} />
    </div>
  );
}

export default App;

function useMediaQuery() {
  const [screenSize, setScreenSize] = useState(0);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
}
