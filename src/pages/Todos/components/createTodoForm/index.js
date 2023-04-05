import CustomInput from "../../../../commonComponents/CustomInput";
import CustomButton from "../../../../commonComponents/CustomButton";

import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CreateTodoForm = ({ taskText, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <CustomInput
        type="taskText"
        name="taskText"
        value={taskText}
        onChange={handleChange}
        placeholder="Enter a task"
        size="medium"
      />

      <CustomButton
        text="Create Task"
        onClick={handleSubmit}
        size="large"
        color="secondary"
      />
    </form>
  );
};

CreateTodoForm.propTypes = {
  taskText: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateTodoForm;
