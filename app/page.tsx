
import prisma from "@/lib/prismadb";
import { AddForm } from "./components/AddForm";
import { DeleteForm } from "./components/DeleteForm";

export default async function Home() {
  let todos = await prisma.todo.findMany()

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {/* <DeleteForm id={todo.id} todo={todo.text} /> */}
          </li>
        ))}
      </ul>
    </main>
  );
}