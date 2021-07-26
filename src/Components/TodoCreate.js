import { Input } from 'antd';

export const TodoCreate = (props) => {
    const  FormSubmit=(e) =>{
        e.preventDefault()
        if (props.todo !== "") {
           props.setTodos([
                ...props.todos,
                {
                    id: props.todos.length + 1,
                    text: props.todo.trim()
                }
            ]);
        }
        props.setTodo("");
    }
    const inputChange=(e)=>{
        props.setTodo(e.target.value)
    }
    return (
        <div>
        <form onSubmit={FormSubmit}>
        <Input className='form' placeholder="add todo"
            style={{ width: '270px', height: '40px', borderRadius: '8px', fontSize: '18px', }}
            name="todo"
            type="text"
            value={props.todo}
            onChange={inputChange}
        />
        <button className='btn' style={{ marginLeft: '5px' }} type="submit">Add</button>
    </form>
        </div>
    )
}
