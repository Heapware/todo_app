import { Input } from 'antd'

export const TodoUpdate = (props) => {

    function editChange(e) {
        props.setCurrentTodo({ ...props.currentTodo, text: e.target.value });
        console.log(props.currentTodo);
    }
    function editFormSubmit(e) {
        e.preventDefault();
        updateTodo(props.currentTodo.id, props.currentTodo);
        props.setIsEditing(false)
    }
    function updateTodo(id, updatedTodo) {
        const updatedItem = props.todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });

        props.setTodos(updatedItem);
    }

    return (
        <div>
            <form onSubmit={editFormSubmit}>
                <Input style={{ width: '200px', height: '40px', borderRadius: '8px', fontSize: '18px' }}
                    name="editTodo"
                    type="text"
                    placeholder="Edit todo"
                    value={props.currentTodo.text}
                    onChange={editChange}
                />
                <button className='btn' style={{ marginLeft: '5px' }} type="submit">Update</button>
                <button className='btn' style={{ marginLeft: '5px' }} onClick={() => props.setIsEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}
