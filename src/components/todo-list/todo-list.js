import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

function TodoList({
  todos, onDeleted, onToggleImportant, onToggleDone,
}) {
  const elements = todos.map((item, idx) => {
    const {
      id, important, done, label,
    } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          id={id}
          important={important}
          done={done}
          label={label}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
          onDeleted={onDeleted}
          idx={idx}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
}

export default TodoList;
