import React from "react";
import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  taskNumber,
  handleComplete,
  handleEdit,
  handleDelete,
  taskText,
  isCompleted,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>{taskNumber}</div>
      <div className={isCompleted ? styles.completed : ""}>{taskText}</div>

      <div className={styles.buttonArea}>
        <button
          disabled={isCompleted}
          onClick={() => {
            handleEdit(id);
          }}
        >
          Edit
        </button>

        <button
          className={styles.deleteButton}
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>

        <button
          disabled={isCompleted}
          onClick={() => {
            handleComplete(id);
          }}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
