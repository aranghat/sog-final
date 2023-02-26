import { useState } from "react";

export default function ToDoItem(props)
{
    let [iscompleted, setStatus] = useState(props.abcd.iscompleted);

    const handleMarkAsComplete = () => {
       setStatus(true);
       props.onComplete(props.abcd.id);
    }

    const handleDelete = () => {

             props.onDelete(props.abcd.id);
    }

    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col">
                    <h1>{props.abcd.name}</h1>
                    <h6  className=
                    { iscompleted ? "text-success" : "text-danger" }>
                        {iscompleted ? "Completed" 
                        : "Pending"}
                    </h6>
                </div>
                <div className="col-auto pt-4">
                    { 
                        (!iscompleted) &&
                            <button className="btn btn-primary"
                            onClick={handleMarkAsComplete}
                            >
                                Mark As Complete
                            </button>
                    }
                </div>
                <div className="col-auto pt-4">
                    <button className="btn btn-outline btn-danger" 
                    onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}