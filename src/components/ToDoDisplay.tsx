import React from "react";
import { AllTodo } from "../models";
import TodoCard from "./TodoCard";

interface Props {
  allTodo: AllTodo[];
}

const ToDoDisplay: React.FC<Props> = ({ allTodo }) => {
  return (
    <main>
      <ul className="flex flex-col gap-[5px]">
        {allTodo.map((val, i) => (
          <TodoCard val={val} key={i} />
        ))}
      </ul>
    </main>
  );
};

export default ToDoDisplay;
