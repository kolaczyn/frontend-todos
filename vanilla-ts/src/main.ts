import { createLi, generateId } from "./utils";

type Todo = {
  id: string;
  label: string;
};

let todos: Todo[] = [];

const addTodoButton =
  document.querySelector<HTMLButtonElement>("#add-todo-btn")!;
const inputElement = document.querySelector<HTMLInputElement>("#todo-input")!;
const listElement = document.querySelector<HTMLUListElement>("#todo-list")!;

const updateTodos = () => {
  listElement.innerHTML = "";
  todos.forEach((todo) => {
    listElement.appendChild(createLi(`${todo.id}. ${todo.label}`));
  });
};

addTodoButton!.addEventListener("click", () => {
  const label = inputElement!.value;
  const id = generateId();
  todos.push({ id, label });

  updateTodos();

  inputElement!.value = "";
});

export {};
