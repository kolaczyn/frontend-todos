type Todo = {
  id: string;
  label: string;
};

let count = 0;

const addTodoButton =
  document.querySelector<HTMLButtonElement>("#add-todo-btn")!;
const inputElement = document.querySelector<HTMLInputElement>("#todo-input")!;

addTodoButton!.addEventListener("click", () => {
  inputElement!.value = count.toString();
  count += 1;
});

export {};
