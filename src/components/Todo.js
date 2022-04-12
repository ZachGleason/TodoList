import React, { useState} from 'react'
import '../App.css'

const Todo = (props) => {
    const {item, deleteItem} = props;
    const [completed, setCompleted] = useState(false)
    console.log(item)

    return (
        <li style={{ textDecoration: completed ? "line-through" : "none"}}
        // onClick = {() => setCompleted(prevState => !prevState)}
        className='todos' key={item.id} >
            <input type="checkbox" 
            checked={completed}
            onChange={() => setCompleted(prevState => !prevState)}
            // onChange={() => setCompleted(!completed)}
            />
            {item.value}
            <button id='delete'
            onClick={() => deleteItem(item.id)}
        >
            X
        </button> 
        </li>
)
}

export default Todo

