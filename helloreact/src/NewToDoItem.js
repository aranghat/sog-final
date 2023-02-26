import {useState} from 'react';
export default function NewToDoItem(props){

    let [taskName, setTaskName] = useState("");

    const handleTaskAdd = () => {
        props.onAdd(taskName);
        setTaskName("");
    };

    return(
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input 
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}     
                     type="text"
                     className="form-control" 
                     placeholder="Enter Task Name"/>
                     
                    <button className="btn btn-primary"
                    onClick={handleTaskAdd}
                    >Add Task</button>
                </div>
            </div>
        </div>
    )
}