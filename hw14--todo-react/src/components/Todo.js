import React, { useState } from 'react';

function Todo({ todo, todos, setTodos, isMobile }) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const mouseOverHandle = (e) => {
    e.stopPropagation();
    setShowDeleteButton(true);
  };

  const mouseLeaveHandle = (e) => {
    e.stopPropagation();
    setShowDeleteButton(false);
  };

  const deleteHandler = (e) => {
    e.stopPropagation();
    setTodos(todos.filter((todoItem) => todoItem.id !== todo.id));
  };

  const completeHandler = (e) => {
    setTodos(
      todos.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return { ...todoItem, isCompleted: !todoItem.isCompleted };
        }
        return todoItem;
      })
    );
  };

  console.log(isMobile);
  return (
    <li
      onMouseOver={mouseOverHandle}
      onMouseLeave={mouseLeaveHandle}
      onClick={completeHandler}
      className={`todo-item ${todo.isCompleted ? 'todo-item-completed' : ''}`}
    >
      <span className="text">{todo['text']}</span>
      {isMobile === false && showDeleteButton ? (
        <button onClick={deleteHandler} className="remove-btn">
          <i className="fas fa-times"></i>
        </button>
      ) : null}
    </li>
  );
}

export default Todo;

// import React from 'react';

// function Todo({ text, isCompleted }) {
//   return (
//     <li className="todo-item">
//       <span className="text">{text}</span>
//       <button className="remove-btn">
//         <i className="fas fa-times"></i>
//       </button>
//     </li>
//   );
// }

// export default Todo;
