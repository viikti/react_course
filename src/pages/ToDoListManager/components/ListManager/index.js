import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import styles from "./styles.modules.scss";

import React from "react";

const TaskList = ({
  id,
  text,
  handleRemoveListManager,
  handleCompleteListManager,
  handleEditingListManager,
  isDone,
  IsEditing,
}) => {
  const [textEdit, setTextEdit] = useState(text);
  const handleTextEdition = (event) => {
    setTextEdit(event.target.value);
  };

  return (
    <div>
      <h1>Task </h1>
    </div>
  );
};

export default TaskList;
