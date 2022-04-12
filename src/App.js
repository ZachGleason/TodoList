import React, { useState } from 'react';
import "./App.css";
import Todo from './components/Todo'

const App = () => {
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState('')

    const addItem = () => {
      // creates a new item with a unique id
      const item={
        id: 1 + Math.random(),
        value: newItem
      };

      setList([...list, item])
    }

    const deleteItem = (id) => {
      // copy current list of items
      console.log('deleting item...', id)
    const filter = list.filter(item => item.id !== id )
    setList(filter)
    }

    return (
      <div id='todo'>
          <div>
            <div className='additem'>Add an Item...</div>  
            <br />
            <input 
            id='textstyle'
            type="text"
            placeholder='type an item....'
            value={newItem}
            onChange= {e => setNewItem(e.target.value)}
            />
            <button
            id='button'
            onClick={() => addItem()}
            >
              Add
            </button>
            <div>
              <ul>
                  {list.map(item => <Todo item={item} deleteItem={deleteItem}/>)}
              </ul>
              
            </div>
          </div>
      </div>
    );
}

export default App;