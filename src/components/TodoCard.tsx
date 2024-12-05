import React, { useEffect, useRef } from "react";
import { AllTodo } from "../models";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useTodoContext } from "../useTodoContext";

interface Props {
  val: AllTodo;
}

// CMP
const TodoCard: React.FC<Props> = ({ val }) => {
  // VARS
  const { setAllTodo, setTodoEdit, todoEdit } = useTodoContext();
  const todoEditRef = useRef<HTMLInputElement>(null);

  // FN
  const editClicked = (taskId: string) => {
    setTodoEdit({ todoEdit: true, id: taskId });
  };

  // FN
  const deleteClicked = (taskId: string) => {
    setAllTodo((prev) => prev.filter((val) => val.id !== taskId));
  };

  // FN
  const doneClicked = (taskId: string) => {
    setAllTodo((prev) =>
      prev.map((val) => {
        return val.id === taskId ? { ...val, todoCompeted: true } : { ...val };
      }),
    );
  };

  // FN
  useEffect(() => {
    if (todoEdit.id === val.id && todoEdit.todoEdit) {
      todoEditRef.current?.focus();
    }
  }, [todoEdit, val.id]);

  //
  return (
    <li className="grid min-h-[50px] grid-cols-[1fr_70px] items-center rounded-[5px] border border-teal-500 bg-teal-100 px-[10px]">
      <div className="font-semibold">
        {val.id === todoEdit.id && todoEdit.todoEdit === true && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setTodoEdit({ todoEdit: false, id: "" });
            }}
          >
            <input
              ref={todoEditRef}
              className="bg-transparent outline-none"
              id="todoEditInput"
              type="text"
              value={val.todo}
              onChange={(e) =>
                setAllTodo((prev) =>
                  prev.map((todo) =>
                    todo.id === val.id
                      ? { ...todo, todo: e.target.value }
                      : todo,
                  ),
                )
              }
            />
          </form>
        )}
        {val.todoCompeted && todoEdit.id !== val.id && <s>{val?.todo}</s>}
        {!val.todoCompeted && todoEdit.id !== val.id && <p>{val?.todo}</p>}
      </div>
      <div className="flex items-center justify-end gap-[10px] text-teal-700">
        <button onClick={() => editClicked(val.id)}>
          <FaPen />
        </button>
        <button onClick={() => deleteClicked(val.id)}>
          <FaTrash />
        </button>
        <button onClick={() => doneClicked(val.id)}>
          <FaCheck />
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
