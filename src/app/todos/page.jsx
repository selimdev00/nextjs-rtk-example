import TodosList from "@/components/Todos/List";

export default async function TodosPage() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json(),
  );

  return <TodosList todos={todos} />;
}
