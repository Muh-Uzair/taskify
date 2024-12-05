import { createContext } from "react";
import { AllTodo, TodoEditType } from "./models";

type TodoContextType = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  allTodo: AllTodo[];
  setAllTodo: React.Dispatch<React.SetStateAction<AllTodo[]>>;
  todoEdit: TodoEditType;
  setTodoEdit: React.Dispatch<React.SetStateAction<TodoEditType>>;
};
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);
