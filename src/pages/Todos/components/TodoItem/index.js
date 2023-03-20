import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import CustomButton from "../../../../commonComponents/CustomButton";
// import CustomAccordion from "../../../../commonComponents/CustomAccordion";

const TodoItem = ({
  id,
  taskNumber,
  handleComplete,
  handleEdit,
  handleDelete,
  taskText,
  isCompleted,
  // isExpanded,
  // handleAccordionToggle,
}) => {
  return (
    <div className={styles.wrapper}>
      {/*<CustomAccordion*/}
      {/*  expanded={isExpanded}*/}
      {/*  onChange={handleAccordionToggle}*/}
      {/*  taskText={taskText}*/}
      {/*  name={taskText}*/}
      {/*>*/}
      <div>{taskNumber}</div>
      <div className={isCompleted ? styles.completed : ""}>{taskText}</div>

      <div className={styles.buttonArea}>
        <CustomButton
          text={"edit"}
          color={"primary"}
          onClick={() => handleEdit(id)}
          size={"medium"}
        />

        <CustomButton
          text={"delete"}
          color={"error"}
          onClick={handleDelete}
          size={"medium"}
        />

        <CustomButton
          text={"complete"}
          color={"secondary"}
          onClick={() => handleComplete(id)}
          size={"medium"}
        />
      </div>
      {/*</CustomAccordion>*/}
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  taskNumber: PropTypes.number.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  taskText: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
