import axios from "axios";
import React from "react";

const TaskList = ({ completedTasks, uncompletedTasks, onEdit, onDelete, toggleStatus, removeTask }) => 
  
  { 
    console.log({completedTasks})
    console.log({uncompletedTasks})
    
    return (
  // <table classNameName="tasks-table">
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
  //           <button classNameName="edit-button" onClick={() => onEdit(task)}>
  //             Edit
  //           </button>
  //           <button classNameName="delete-button" onClick={() => onDelete(task.id)}>
  //             Delete
  //           </button>
  //         </td>
  //       </tr>
  //     ))} */}
  //   </tbody>
  // </table>
    <div className="main">
            <div id="uncompleted" className="task_viewer">
              
              {uncompletedTasks.map((task) =>                 <div className="task">
                    <h1 className="tasktitle"> {task.taskTitle} </h1>
                    <span className="taskdescription">
                    {task.description}
                    </span>
                    <span className="taskdates"> 
                    due: {task.dateDue}
                    </span>
                    <div className="buttonrow">
                    <button
              className="completebutton"
              onClick={() => toggleStatus(task.id)}
            >
              Complete
            </button>
            <button
              className="removebutton"
              onClick={() => removeTask(task.id)}
            >
              Remove
            </button> </div>
                </div>)}
                {/* <div className="task">
                    <h1 className="tasktitle"> Task Title </h1>
                    <span className="taskdescription">
                        task description
                    </span>
                    <span className="taskdates"> 
                        created: 01.07.07 // due: 12.7.24
                    </span>
                    <button className="completebutton">
                        Complete
                    </button>
                </div> */}
            </div>
            <div className="task_viewer">
            {completedTasks.map((task) =>                 <div className="task">
                    <h1 className="tasktitle"> {task.taskTitle} </h1>
                    <span className="taskdescription">
                    {task.description}
                    </span>
                    <span className="taskdates"> 
                        due: {task.dateDue}
                    </span>
                    <div className="buttonrow">
                    <button
              className="completebutton"
              onClick={() => toggleStatus(task.id)}
            >
              Uncomplete
            </button>
            <button
              className="removebutton"
              onClick={() => removeTask(task.id)}
            >
              Remove
            </button> </div>
                </div>)}
            </div>
    </div> 
)};

export default TaskList;
