import React from "react";
import { FaSquareArrowUpRight } from "react-icons/fa6";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todoSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// CMP
const ToDoForm: React.FC<Props> = ({ todo, setTodo, todoSubmit }) => {
  return (
    <section>
      <form onSubmit={(e) => todoSubmit(e)}>
        <div className="relative">
          <label htmlFor="todo" className="font-semibold text-teal-500">
            Enter Task
          </label>
          <br />
          <input
            id="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="peer h-[35px] w-full rounded-[5px] border border-gray-200 px-[5px] text-gray-500 focus:border-teal-500 focus:outline-none"
            type="text"
          />
          <button
            type="submit"
            className="absolute bottom-[5px] right-[5px] text-[25px] text-gray-300 peer-focus:text-teal-500 peer-focus:active:text-teal-700"
          >
            <FaSquareArrowUpRight />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ToDoForm;
