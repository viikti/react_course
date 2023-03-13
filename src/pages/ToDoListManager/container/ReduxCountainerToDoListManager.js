import React, { useState } from "react";
import {
  completeToDoList,
  createToDoList,
  editToDoList,
  removeToDoList,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { taskSelector } from "../selectors";
import ListManagerView from "../components/ListManagerView";
import ListManager from "../components/ListManager";

const ReduxToDoListManager = () => {
  const [task, setTask] = useState("");
  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const dispatch = useDispatch();

  const TaskManager = useSelector(taskSelector);
  const handleCreateListManager = (id) => {
    dispatch(createToDoList(id));
  };

  const handleRemoveListManager = (id) => {
    dispatch(removeToDoList(id));
  };

  const handleCompleteListManager = (id) => {
    dispatch(completeToDoList(id));
  };
  const handleEditingListManager = (id) => {
    dispatch(editToDoList(id));
  };

  return (
    <ListManagerView>
      <ListManager></ListManager>
    </ListManagerView>
  );
};

export default ReduxToDoListManager;
