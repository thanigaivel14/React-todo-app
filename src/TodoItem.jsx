import React from 'react';

const TodoItem = ({ todo, index, deleteTodo }) => {
  return (
    <li className="todo-item">
      {todo}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
