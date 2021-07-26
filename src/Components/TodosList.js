import { Card, Space } from "antd";
import { useState } from "react";
import { TodoCreate } from "./TodoCreate";
import { TodoDelete } from "./TodoDelete";
import { TodoUpdate } from "./TodoUpdate";

export default function TodosList() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});


    return (
        <Space>
            <Card className='card' style={{
                width: 380, borderRadius: '20px',
                background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)`
            }}>
                <p className='title'>Todo List</p>
                {isEditing ? (
                    <TodoUpdate todos={todos} setIsEditing={setIsEditing} todo={todo} setTodo={setTodo} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} setTodos={setTodos}/>
                ) : (
                    <TodoCreate todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
                )}

                <ul style={{ listStyle: 'none', color: 'white', marginTop: '20px' }}>
                    {todos.map((todo) => (
                        <li key={todo.id} >
                            <TodoDelete todos={todos} setIsEditing={setIsEditing} setCurrentTodo={setCurrentTodo} todo={todo} setTodos={setTodos} />
                        </li>
                    ))}
                </ul>
            </Card>
        </Space>
    );
}
