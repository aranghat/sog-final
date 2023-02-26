import { useState } from "react";
import ToDoItem from "./ToDoItem";
import NewToDoItem from "./NewToDoItem";


export default function HomePage()
{
    let [todoitems,setToDoItems] = useState([{id: 1, name: "Learn React", iscompleted:false}
                    ,{id: 2, name: "Learn Node", iscompleted:true}
                    ,{id: 3, name: "Learn Express", iscompleted:false}
                    ,{id: 4, name: "Learn MongoDB", iscompleted:false}]);

    const markTaskAsComplete = (id) => {
        let index = todoitems.findIndex(item => item.id == id);
        if(index >= 0)
        {
            todoitems[index].iscompleted = true;
            setToDoItems(p => [...todoitems]);
        }
    }
    const deleteTask = (id) => {
        let newArray = todoitems.filter(item => item.id != id);
        setToDoItems(p => [...newArray]);
    }

    const addTask = (taskName) => {
        let newTask = {id: todoitems.length + 1
                , name: taskName
                , iscompleted:false};

        setToDoItems(p => [...p, newTask]);
    }

    let [filter, setFilter] = useState("all");
    let [search, setSearch] = useState("");

    const checkFilter = (item) => {
        if(filter == "all")
            return true;
        if(filter == "completed" && item.iscompleted)
            return true;
        if(filter == "pending" && !item.iscompleted)
            return true;
        else
         return false;
    }

    const checkSearch = (item) => {
        if(search == "")
            return true;
        if(item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0)
            return true;
        else
            return false;
    }

    return(
       <div className="container">
         Total : {todoitems.length}
         <br/>
         Completed : {todoitems.filter(item => item.iscompleted).length}
         <br/>
         Pending : {todoitems.filter(item => !item.iscompleted).length}
         
            <div className="list-group">
                <div className="list-group-item">
                <NewToDoItem onAdd={addTask} />
                </div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-3">
                        <select className="form-select form-select-sm"
                    onChange={(event) => setFilter(event.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control form-control-sm" placeholder="Search"
                            onChange={(event) => setSearch(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {
                        todoitems.filter((item) => checkFilter(item) && checkSearch(item))
                                
                                 .map((item, index) =>  
                                  <ToDoItem key={index} abcd={item} 
                                    onMarkComplete={markTaskAsComplete}
                                    onDelete={deleteTask} />)
                                
                }
                
            </div>
       </div>
    )

   
}


