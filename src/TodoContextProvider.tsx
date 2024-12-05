import React, { useState } from "react";
import { AllTodo, TodoEditType } from "./models";
import { TodoContext } from "./TodoContext";

interface Props {
  children: React.ReactNode;
}

const TodoContextProvider: React.FC<Props> = ({ children }) => {
  // VARS
  const [todo, setTodo] = useState<string>("");
  const [allTodo, setAllTodo] = useState<AllTodo[]>([]);
  const [todoEdit, setTodoEdit] = useState<TodoEditType>({
    todoEdit: false,
    id: "",
  });

  // JSX
  return (
    <TodoContext.Provider
      value={{ todo, setTodo, allTodo, setAllTodo, todoEdit, setTodoEdit }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
