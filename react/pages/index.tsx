import type { NextPage } from "next";
import { useRef, useState } from "react";
import uniqueId from "lodash.uniqueid";

type Todo = {
  id: string;
  title: string;
};

const DUMMY_TODOS = [{ id: "21", title: "hello world" }];

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>(DUMMY_TODOS);
  const [favTodo, setFavTodo] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    console.log(inputRef);
    setTodos((prev) => [
      ...prev,
      {
        id: uniqueId("todo"),
        title: inputRef?.current?.value ?? "<heheszki invalid nieważne>",
      },
    ]);
  };

  const toggleSetFavTodo = (id: string) => {
    setFavTodo((prev) => {
      if (prev === null) {
        return id;
      }
      if (prev === id) {
        return null;
      }
      return id;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    if (favTodo === id) {
      setFavTodo(null);
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleAddTodo}>Add todo</button>
      {favTodo ? <span>Fav todo is {favTodo}</span> : <span>No fav todo</span>}
      <ol>
        {todos.map(({ id, title }) => (
          <li key={id}>
            {id}. {title}
            {
              <button onClick={() => toggleSetFavTodo(id)}>
                {favTodo === id ? "unfav" : "make fav"}
              </button>
            }
            <button onClick={() => handleDeleteTodo(id)}>rm</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Home;
