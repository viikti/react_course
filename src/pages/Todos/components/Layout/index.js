import React from "react";
import CreateTodoForm from "../createTodoForm";
import TodoItem from "../TodoItem";

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

export default Layout;
