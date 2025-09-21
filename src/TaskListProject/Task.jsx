export const Task = (prop) => {
    return <div className={`task ${prop.status? "completed" : ""}`}>
        <h1>{prop.taskName}</h1>
        <div className={`task-buttons flex g10 ${prop.status ? "hidden" : ""}`}>
            <button className="complete" onClick={() => prop.update(prop.id)}>Complete</button>
            <button className="remove" onClick={()=> prop.deleteTask(prop.id)}>X</button>
        </div>
        </div>;
}