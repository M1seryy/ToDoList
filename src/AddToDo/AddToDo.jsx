import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddToDo = ({ todo, setToDo }) => {
  const [value, setValue] = useState("");
  console.log(value);
  const saveTodo = () => {
    setToDo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
    console.log(uuidv4());
  };
  return (
    <div>
      <input
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  );
};
