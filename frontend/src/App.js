import React, { useState, useRef } from "react";
import TaskListContainer from "./components/TaskListContainer";
import { TaskForm } from "./components/Form";
import axios from "axios";
import "./App.css";
const App = () => {
  const [editingTask, setEditingTask] = useState(null);
  const taskListRef = useRef(null);
  const handleEdit = (task) => {
    setEditingTask(task);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      taskListRef.current.fetchTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };
  const handleUpdate = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3001/tasks/${editingTask.id}`,
        formData
      );
      setEditingTask(null);
      taskListRef.current.fetchTasks();
    } catch (error) {
      console.error("Error updating task", error);
    }
  };
  const handleAddTask = async (formData) => {
    try {
      await axios.post("http://localhost:3001/tasks", formData);
      taskListRef.current.fetchTasks();
    } catch (error) {
      console.error("Error adding task", error);
    }
  };
  return (
    <div className="site">
    <div className="container">
      <div className="add-form">
        <h4 class="importanttitle">Task Management Webapp</h4>
        <TaskForm
          onSubmit={editingTask ? handleUpdate : handleAddTask}
          initialFormData={
            editingTask || {
              taskTitle: "",
              description: "",
              dateDue: "",
              status: "to do", // Default value for new tasks
            }
          }
          isEditing={!!editingTask}
          setEditingTask={setEditingTask}
        />
      </div>
      <div class="flex">
        <TaskListContainer
          ref={taskListRef}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
        {/* 
        <div class="main">
            <div id="uncompleted" class="task_viewer">
                <div class="task">
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
                </div>
            </div>
            <div class="task_viewer">
            </div>
        </div> 
        */}
    </div>
    </div>
  );
};
export default App;
