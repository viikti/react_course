import React from "react";

const CreateTodoForm = ({ taskText, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="taskText"
        name="taskText"
        value={taskText}
        onChange={handleChange}
      />
      <button type="Submit">Create Task</button>
    </form>
  );
};

export default CreateTodoForm;
