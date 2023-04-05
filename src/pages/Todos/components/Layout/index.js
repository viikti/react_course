import React from "react";
import CreateTodoForm from "../createTodoForm";
import TodoItem from "../TodoItem";

import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import TodoItemView from "../TodoItemView";

const Layout = ({
  todos,
  handleSubmit,
  handleTaskTextChange,
  taskText,
  handleTaskDelete,
  handleTaskComplete,
  handleTaskEdit,
  handleTaskCancel,
  handleTaskSave,
}) => {
  return (
    <div>
      <CreateTodoForm
        handleSubmit={handleSubmit}
        taskText={taskText}
        handleChange={handleTaskTextChange}
      />

      <div className={styles.todosArea}>
        {todos.map(({ id, text, isCompleted, isEdited }, index) => {
          const taskNumber = index + 1;

          return isEdited ? (
            <TodoItemView
              key={id}
              taskText={text}
              taskNumber={taskNumber}
              id={id}
              handleCancel={handleTaskCancel}
              handleSave={handleTaskSave}
            />
          ) : (
            <TodoItem
              id={id}
              key={id}
              taskText={text}
              taskNumber={taskNumber}
              handleEdit={handleTaskEdit}
              handleComplete={handleTaskComplete}
              handleDelete={handleTaskDelete}
              isCompleted={isCompleted}
            />
          );
        })}
      </div>
    </div>
  );
};
Layout.propTypes = {
  todos: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  taskText: PropTypes.string.isRequired,
  handleTaskTextChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
  handleTaskComplete: PropTypes.func.isRequired,
  handleTaskEdit: PropTypes.func.isRequired,
  handleTaskCancel: PropTypes.func.isRequired,
  handleTaskSave: PropTypes.func.isRequired,
};

export default Layout;
