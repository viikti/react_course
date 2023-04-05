import React from "react";
import { useState } from "react";
import { useForm } from "../../../hooks";

const FormsContainer = () => {
  const { form, handleChange, handleReset } = useForm({
    email: ``,
    password: ``,
  });

  return (
    <>
      <h1>Forms</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(form);
        }}
      >
        <label>
          <p>Email</p>
          <input
            type="email"
            name={`email`}
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            name={`password`}
            value={form.password}
            onChange={handleChange}
          />
        </label>

        <button type="Submit">Submit</button>
      </form>
    </>
  );
};

export default FormsContainer;
