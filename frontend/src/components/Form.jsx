import { useState, useEffect } from "react";

const statusOptions = ["","uncompleted", "completed"];

export const TaskForm = ({
  onSubmit,
  initialFormData,
  isEditing,
  setEditingTask,
}) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;
    console.log({ name, value });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      taskTitle: "",
      description: "",
      dateDue: "",
      status: "", // Default value for new tasks
    });
  };

  useEffect(() => {
    if (isEditing) {
      setFormData(initialFormData);
    }
  }, [initialFormData, isEditing]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="taskTitle"
          value={formData.taskTitle}
          onChange={handleInputChange} 
          required
          minLength={4}
        /> (required)
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          minLength={4}
        /> (required)
      </label>
      <label>
        Due Date:
        <input
          type="date"
          name="dateDue"
          value={formData.dateDue}
          onChange={handleDateChange} required
        /> (required)
      </label>
      <label>
        Status:
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          required
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
      {isEditing && (
        <button type="button" onClick={() => setEditingTask(null)}>
          Cancel
        </button>
      )}
    </form>
  );
};
