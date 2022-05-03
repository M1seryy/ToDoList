import React, { useState } from "react";

export const ToDoLIst = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  };

  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  };
  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };
  console.log(todo);

  let saveTodo = (id) => {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  };
  return (
    <div>
      {todo.map((item) => (
        <div key={todo.id}>
          {edit == item.id ? (
            <div>
              <input onChange={(e) => setValue(e.target.value)} value={value} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit == item.id ? (
            <div>
              <button
                onClick={() => {
                  saveTodo(item.id);
                }}
              >
                Соxpанить
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button onClick={() => editTodo(item.id, item.title)}>
                Редактировать
              </button>
              <button onClick={() => statusTodo(item.id)}>
                Закрыть/Открыть
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
