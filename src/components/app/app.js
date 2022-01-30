import React, { useState } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

const App = () => {

    const [ todoData, setTodoData ] = useState([
            { label: 'Drink Coffee', important: false, id: 1, done: false },
            { label: 'Make Awesome App', important: false, id: 2, done: false },
            { label: 'Have a lunch', important: false, id: 3, done: false }
        ]
    );
    const [ term, setTerm ] = useState('');
    const [ filterState, setFilterState ] = useState('all');

    const onToggleImportant = (id) => {
        setTodoData((todoData) => {
            return todoData.map((el) => {
                if (el.id === id) {
                    el.important = !el.important;
                    return el;
                } else return el;
            });
        });
    };

    const onToggleDone = (id) => {
        setTodoData((todoData) => {
            return todoData.map((el) => {
                if (el.id === id) {
                    el.done = !el.done;
                    return el;
                } else return el;
            });
        });
    };

    const deleteItem = (itemId) => {
        setTodoData((todoData) => {
            return todoData.filter(({ id }) => itemId !== id);
        });
    };

    const addItem = (text) => {
        const maxId = new Date();
        const newItem = {
            label: text,
            important: false,
            done: false,
            id: maxId
        };
        setTodoData((todoData) => {
            return [
                ...todoData,
                newItem
            ];
        });
    };

    const onFilterChange = (filterState) => {
        setFilterState(filterState);
    };

    const onSearchChange = (term) => {
        setTerm(term);
    };

    function search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    function filterFunc(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    const visibleItems = filterFunc(search(todoData, term), filterState);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
        <div className="todo-app">
            <AppHeader toDo={ todoCount } done={ doneCount } />
            <div className="top-panel d-flex">
                <SearchPanel
                    onSearchChange={ onSearchChange } />
                <ItemStatusFilter
                    filterProps={filterState}
                    onFilterChange={ onFilterChange }
                />
            </div>
            <TodoList
                todos={ visibleItems }
                onDeleted={ deleteItem }
                onToggleImportant={ onToggleImportant }
                onToggleDone={ onToggleDone }
            />
            <ItemAddForm onItemAdded={ addItem } />
        </div>
    );
};

export default App;