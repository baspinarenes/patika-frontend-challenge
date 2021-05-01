import React, { useState } from 'react';

function TodoFooter({ setFilter }) {
  const [isShowCompleted, setIsShowCompleted] = useState(false);
  const [isShowNompleted, setIsShowNompleted] = useState(false);

  const checkBoxHandler = (e) => {
    if (e.target.className === 'show-completed') {
      if (e.target.checked) {
        setIsShowCompleted(true);
        setIsShowNompleted(false);

        setFilter('completed');
      } else {
        setIsShowCompleted(false);
        setFilter('all');
      }
    } else {
      if (e.target.checked) {
        setIsShowCompleted(false);
        setIsShowNompleted(true);
        setFilter('nompleted');
      } else {
        setIsShowNompleted(false);
        setFilter('all');
      }
    }
  };

  return (
    <div className="todo-footer">
      <div className="item">
        <input
          checked={isShowCompleted}
          onChange={checkBoxHandler}
          type="checkbox"
          className="show-completed"
        />
        <label htmlFor="show-completed">Tamamlananlar</label>
      </div>
      <div className="item">
        <input
          checked={isShowNompleted}
          onChange={checkBoxHandler}
          type="checkbox"
          className="show-nompleted"
        />
        <label htmlFor="show-nompleted">Yapılacaklar</label>
      </div>
    </div>
  );
}

export default TodoFooter;
