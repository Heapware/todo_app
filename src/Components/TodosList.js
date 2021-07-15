import { Card, Input, Space } from "antd";
import { useState } from "react";

export default function TodosList() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});
    function inputChange(e) {
        setTodo(e.target.value);
    }
    function editChange(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        console.log(currentTodo);
    }
    function FormSubmit(e) {
        e.preventDefault()
        if (todo !== "") {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo.trim()
                }
            ]);
        }

        setTodo("");
    }

    function editFormSubmit(e) {
        e.preventDefault();

       updateTodo(currentTodo.id, currentTodo);
    }

    function deleteClick(id) {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(removeItem);
    }

    function updateTodo(id, updatedTodo) {
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });
        setIsEditing(false);
        setTodos(updatedItem);
    }

    function editClick(todo) {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
    }

    return (
        <Space>
            <Card className='card' style={{
                width: 380, borderRadius: '20px',
                background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)`
            }}>
                <p className='title'>Todo List</p>
                {isEditing ? (
                    <form onSubmit={editFormSubmit}>
                        <Input style={{ width: '200px', height: '40px', borderRadius: '8px', fontSize: '18px' }}
                            name="editTodo"
                            type="text"
                            placeholder="Edit todo"
                            value={currentTodo.text}
                            onChange={editChange}
                        />
                        <button className='btn' style={{ marginLeft: '5px' }} type="submit">Update</button>
                        <button className='btn' style={{ marginLeft: '5px' }} onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                ) : (
                    <form onSubmit={FormSubmit}>
                        <Input className='form' placeholder="add todo"
                            style={{ width: '270px', height: '40px', borderRadius: '8px', fontSize: '18px', }}
                            name="todo"
                            type="text"
                            value={todo}
                            onChange={inputChange}
                        />
                        <button className='btn' style={{ marginLeft: '5px' }} type="submit">Add</button>
                    </form>
                )}

                <ul style={{ listStyle: 'none', color: 'white', marginTop: '20px' }}>
                    {todos.map((todo) => (
                        <li key={todo.id} className='listTodo' style={{ display: 'flex', fontSize: '18px', justifyContent: 'space-between' }}>
                            <li>
                                {todo.id}: {''}
                                <span className='todos'>{todo.text}</span>
                            </li>
                            <li>
                                <span className='removeBtn'><i className="fas fa-trash" onClick={() => deleteClick(todo.id)}></i></span>
                                <span className='editIcon'><i className="far fa-edit" onClick={() => editClick(todo)}></i> </span>
                            </li>
                        </li>
                    ))}
                </ul>
            </Card>
        </Space>
    );
}
