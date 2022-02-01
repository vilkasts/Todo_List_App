import React from 'react';

function ItemStatusFilter({ filterProps, onFilterChange }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const buttons2 = buttons.map(({ name, label }) => {
    const isActive = filterProps === name;
    const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        { label }
      </button>
    );
  });

  return (
    <div className="btn-group">
      { buttons2 }
    </div>
  );
}

export default ItemStatusFilter;
