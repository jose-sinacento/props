import { useState } from "react";

function AddTaskForm({addTask}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Introduce una nueva tarea" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Agregar</button>
        </form>
    )
}

export default AddTaskForm;