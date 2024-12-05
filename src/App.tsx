import React from "react";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import { AllTodo } from "./models";
import { v4 as uuidv4 } from "uuid";
import ToDoDisplay from "./components/ToDoDisplay";
import { useTodoContext } from "./useTodoContext";

const App: React.FC = () => {
  // VARS
  const { todo, setTodo, allTodo, setAllTodo } = useTodoContext();

  // FN
  const todoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;

    const newToDo: AllTodo = {
      id: uuidv4(),
      todo,
      todoCompeted: false,
    };

    setAllTodo((prev) => [...prev, newToDo]);
    setTodo("");
  };

  return (
    <div className="flex w-[350px] flex-col gap-[10px] rounded-[5px] bg-gray-100 p-[10px]">
      <Header />

      <ToDoForm todo={todo} setTodo={setTodo} todoSubmit={todoSubmit} />

      <ToDoDisplay allTodo={allTodo} />
    </div>
  );
};

export default App;
