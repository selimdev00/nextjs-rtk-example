"use client";

import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  reset,
  selectCount,
} from "@/store/slices/counterSlice";
import { useEffect, useState } from "react";
import { fetchTodos, selectTodos } from "@/store/slices/todosSlice";

export default function ReduxExamplePage() {
  const amount = useSelector(selectCount);
  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className={"p-4 flex flex-col gap-4"}>
      <h1>Here is Redux Example</h1>
      <span>Value: {amount}</span>
      <div className={"flex items-center gap-4"}>
        <button
          className={"p-2 bg-gray-100 rounded shadow"}
          onClick={() => dispatch(decrement())}
        >
          Decrment
        </button>

        <button
          className={"p-2 bg-gray-100 rounded shadow"}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          className={"p-2 bg-gray-100 rounded shadow"}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>

      <div className={"flex items-center gap-4"}>
        <input
          type="text"
          className={"bg-gray-100 p-2 shadow rounded"}
          value={incrementAmount}
          onInput={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className={"p-2 bg-gray-100 rounded shadow"}
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Increment by amount
        </button>

        <button
          className={"p-2 bg-gray-100 rounded shadow"}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Increment by amount async
        </button>
      </div>

      <h2>Todo list from todos' slice:</h2>

      <ul>
        {todos.map((e, index) => (
          <li key={`todo-${index}`}>
            {index + 1}. {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
