import React from "react";
import { AllTodo } from "../models";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

interface Props {
  val: AllTodo;
}

const TodoCard: React.FC<Props> = ({ val }) => {
  return (
    <li className="grid min-h-[50px] grid-cols-[1fr_70px] items-center rounded-[5px] border border-teal-500 bg-teal-100 px-[10px]">
      <div className="font-semibold">{val?.todo}</div>
      <div className="flex items-center justify-end gap-[10px] text-teal-700">
        <button>
          <FaPen />
        </button>
        <button>
          <FaTrash />
        </button>
        <button>
          <FaCheck />
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
