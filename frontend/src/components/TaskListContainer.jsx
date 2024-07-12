import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";
import TaskList from "./TaskList"; // This is your presentational component

const TaskListContainer = forwardRef(({ onEdit, onDelete }, ref) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [uncompletedTasks, setUncompletedTasks] = useState([]);

  const toggleStatus = async (id) => {
    try {
      await axios.put(`http://localhost:3001/tasks/status/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tasks");
      const tasks = response.data;
      setCompletedTasks(tasks.filter((task) => task.status === "completed"))
      setUncompletedTasks(tasks.filter((task) => task.status === "uncompleted"))
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

useEffect(()=>{
  console.log(completedTasks)
})

  useEffect(() => {
    fetchTasks();
  }, []);

  useImperativeHandle(ref, () => ({
    fetchTasks,
  }));

  return <TaskList toggleStatus={toggleStatus} uncompletedTasks={uncompletedTasks} completedTasks={completedTasks} onEdit={onEdit} onDelete={onDelete} />;
});

export default TaskListContainer;
