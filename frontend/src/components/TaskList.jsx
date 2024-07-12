import axios from "axios";
import React from "react";

const TaskList = ({ completedTasks, uncompletedTasks, onEdit, onDelete }) => 
  
  { 
    console.log({completedTasks})
    console.log({uncompletedTasks})
    
    const toggleStatus= async (id, status) => {
      console.log(id , status)
      if (status === "uncompleted"){
        await axios.put(`http://localhost:3001/tasks/status/${id}`);
      }      
    }
    return (
  // <table className="tasks-table">
  //   <thead>
  //     <tr>
  //       <th>Task</th>
  //       <th>Description</th>
  //       <th>Due</th>
  //       <th>Actions</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {/* {tasks.map((task) => (
  //       <tr key={task.id}>
  //         <td>{task.taskTitle}</td>
  //         <td>{task.description}</td>
  //         <td>{task.dateDue}</td>
  //         <td>
  //           <button className="edit-button" onClick={() => onEdit(task)}>
  //             Edit
  //           </button>
  //           <button className="delete-button" onClick={() => onDelete(task.id)}>
  //             Delete
  //           </button>
  //         </td>
  //       </tr>
  //     ))} */}
  //   </tbody>
  // </table>
    <div class="main">
            <div id="uncompleted" class="task_viewer">
              {uncompletedTasks.map((task) =>                 <div class="task">
                    <h1 class="tasktitle"> {task.taskTitle} </h1>
                    <span class="taskdescription">
                    {task.description}
                    </span>
                    <span class="taskdates"> 
                    due: {task.dueDate}
                    </span>
                    <button class="completebutton" onClick={() => toggleStatus(task.id, task.status)}>
                        Complete
                    </button>
                </div>)}
                {/* <div class="task">
                    <h1 class="tasktitle"> Task Title </h1>
                    <span class="taskdescription">
                        task description
                    </span>
                    <span class="taskdates"> 
                        created: 01.07.07 // due: 12.7.24
                    </span>
                    <button class="completebutton">
                        Complete
                    </button>
                </div> */}
            </div>
            <div class="task_viewer">
            {completedTasks.map((task) =>                 <div class="task">
                    <h1 class="tasktitle"> {task.taskTitle} </h1>
                    <span class="taskdescription">
                    {task.description}
                    </span>
                    <span class="taskdates"> 
                        due: {task.dueDate}
                    </span>
                    <button class="completebutton">
                        Uncomplete
                    </button>
                </div>)}
            </div>
    </div> 
)};

export default TaskList;
