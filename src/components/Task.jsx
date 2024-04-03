function Task({ task, deleteTask, toggleTaskStatus }) {
    return (
        <>
            <li>
                <div style={{ cursor: "pointer", textDecoration: task.completed ? "line-through" : "none" }}>
                    <span onClick={() => toggleTaskStatus(task.id)}>{task.text}</span>
                    <button type="button" onClick={() => deleteTask(task.id)}>Eliminar</button>
                </div>
            </li>
        </>
    )
}

export default Task;