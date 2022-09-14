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

const addRmEventListeners = () => {
  document
    .querySelectorAll<HTMLButtonElement>(".remove-todo-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const todoId = btn.getAttribute("data-todo-id");
        console.table(todoId);
      });
    });
};

const updateTodos = () => {
  listElement.innerHTML = "";
  todos.forEach((todo) => {
    listElement.appendChild(createLi(`${todo.id}. ${todo.label}`, todo.id));
  });
};

addTodoButton!.addEventListener("click", () => {
  const label = inputElement!.value;
  const id = generateId();
  todos.push({ id, label });

  updateTodos();
  addRmEventListeners();

  inputElement!.value = "";
});

export {};
