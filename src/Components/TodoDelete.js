import React from 'react'

export const TodoDelete = (props) => {
    
    function deleteClick(id) {
        const removeItem = props.todos.filter((todo) => {
            return todo.id !== id;
        });
        props.setTodos(removeItem);
    }
    function editClick(todo) {
        props.setIsEditing(true);
        props.setCurrentTodo({ ...todo });
    }
    return (
        <div className='listTodo' style={{ display: 'flex', fontSize: '18px', justifyContent: 'space-between' }}>
            <li>
                {props.todo.id}: {''}
                <span className='todos'>{props.todo.text}</span>
            </li>
            <li>
                <span className='removeBtn'><i className="fas fa-trash" onClick={() => deleteClick(props.todo.id)}></i></span>
                <span className='editIcon'><i className="far fa-edit" onClick={() => editClick(props.todo)}></i> </span>
            </li>

        </div >
    )
}
