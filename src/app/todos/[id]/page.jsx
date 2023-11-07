import Link from "next/link";

const fetchTodoWithId = async (id) => {
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => res.json(),
  );
};

export async function generateMetadata({ params }) {
  const todo = await fetchTodoWithId(params.id);

  return {
    title: todo.title,
  };
}

export default async function TodosItem({ params }) {
  const todo = await fetchTodoWithId(params.id);

  return (
    <div>
      <Link href={"/todos"}>Go back to todos</Link>

      <h1>{params.id}</h1>

      <p>Title: {todo.title}</p>
    </div>
  );
}
