import { useForm } from "../../../../hooks";

import styles from "./styles.module.scss";

const TodoItemView = ({
  id,
  taskNumber,
  taskText,
  handleSave,
  handleCancel,
}) => {
  const { form, handleChange } = useForm({ inputValue: taskText });

  return (
    <div className={styles.wrapper}>
      <div>{taskNumber}</div>

      <input
        type="text"
        value={form.inputValue}
        name="inputValue"
        onChange={handleChange}
      />

      {/*<div className={isCompleted ? styles.completed : ""}>{taskText}</div>*/}

      <div className={styles.buttonArea}>
        <button
          onClick={() => {
            handleSave({ id, newText: form.inputValue });
          }}
        >
          Save
        </button>

        <button
          className={styles.deleteButton}
          onClick={() => {
            handleCancel(id);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TodoItemView;
