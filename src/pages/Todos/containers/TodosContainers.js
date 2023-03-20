import { useDispatch, useSelector } from "react-redux";

import { useForm } from "hooks";
import { useState } from "react";

import Layout from "../components/Layout";

import CreateTodoForm from "../components/createTodoForm";
import { todosList } from "../selector";

import {
  createTodo,
  completeTodo,
  deleteTodo,
  editTodo,
  saveTodo,
  undoTodo,
} from "../reducers";

const TodosContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todosList);
  const { form, handleReset, handleChange } = useForm({ taskText: "" });

  // const [isExpanded, setExpanded] = useState(false);
  //
  // const handleAccordionToggle = (expanded) => {
  //   setExpanded(!expanded);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createTodo(form));
    handleReset();
  };

  const handleTaskRemove = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleTaskComplete = (id) => {
    dispatch(completeTodo(id));
  };
  const handleTaskEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleTaskEditCancel = (id) => {
    dispatch(undoTodo(id));
  };
  const handleTaskSave = (taskData) => {
    dispatch(saveTodo(taskData));
  };
  return (
    <Layout
      todos={todos}
      taskText={form.taskText}
      handleTaskTextChange={handleChange}
      handleSubmit={handleSubmit}
      handleTaskDelete={handleTaskRemove}
      handleTaskComplete={handleTaskComplete}
      handleTaskEdit={handleTaskEdit}
      handleTaskEditCancel={handleTaskEditCancel}
      handleTaskCancel={handleTaskEditCancel}
      handleTaskSave={handleTaskSave}
      // handleAccordionToggle={handleAccordionToggle}
      // expanded={isExpanded}
    />
  );
};

export default TodosContainer;
