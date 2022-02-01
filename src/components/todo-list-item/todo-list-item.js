import React from 'react';
import './todo-list-item.css';

function TodoListItem({
  label, onDeleted, done, important, onToggleImportant, onToggleDone, id, idx,
}) {
  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span
        role="button"
        tabIndex={idx}
        className="todo-list-item-label"
        onKeyDown={(ev) => ev.key === 'Enter' && onToggleDone(id)}
        onClick={() => onToggleDone(id)}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => onToggleImportant(id)}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={() => onDeleted(id)}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default TodoListItem;
