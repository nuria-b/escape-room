import React, {useState} from 'react'
import ToDoForm from './ToDoForm.js'
import ToDo from './ToDo.js'

function ToDoList(){
	const [toDos, setToDos] = useState([]);

    const addToDo = toDo => {
        if(!toDo.text || /^\s*$/.test(toDo.text)){
            return
        }

        const newToDos = [toDo, ...toDos];
        setToDos(newToDos); 
        console.log(newToDos);
    }

    const removeToDo = id => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);
        setToDos(removeArr);
    }

    const updateToDo = (toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
    }

	return (
		<div>
			<h1>What's your plan for today?</h1>
			<ToDoForm onSubmit={addToDo} />
            <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo} />
		</div>
	)
}

export default ToDoList;