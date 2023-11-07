"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "@/store/slices/todosSlice";

export default function TodosList({ todos }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(todos));
  });

  return (
    <ul>
      {todos.map((e, index) => (
        <li key={`todo-${index}`}>
          <Link href={`/todos/${e.id}`}>
            {index}. {e.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
