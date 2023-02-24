import React, { useState } from "react";

import { Control, useFieldArray, useForm, useWatch } from "react-hook-form";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm();

  const { fields, append, prepend, remove } = useFieldArray({
    name: "cart",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });

  return (
    <div>
      <Headers description="Performant, flexible and extensible forms with easy-to-use validation." />
      <form
        onSubmit={handleSubmit((data) => {
          console.log("Submit data", data);
        })}
      >
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <label>
                <span>Name</span>
                <input
                  {...register(`cart.${index}.name`, { required: true })}
                />
              </label>
              <label>
                <span>amount</span>
                <input
                  type="number"
                  {...register(`cart.${index}.amount`, { valueAsNumber: true })}
                />
              </label>
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </section>
          );
        })}
        <button
          type="button"
          onClick={() => {
            append({
              name: "append",
              amount: 0,
            });
          }}
        >
          Append
        </button>
        <button
          type="button"
          onClick={() => {
            prepend({
              name: "prepend",
              amount: 0,
            });
          }}
        >
          prepend
        </button>

        <p>{errors.cart?.root?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
