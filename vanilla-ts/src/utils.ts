export const generateId = () => Math.random().toString().slice(2, 6);

export const createLabel = (label: string) => {
  const spanEl = document.createElement("span");
  spanEl.innerText = label;
  return spanEl;
};

export const createRemoveButton = (id: string) => {
  const btnEl = document.createElement("button");
  btnEl.className = "remove-todo-btn";
  btnEl.innerText = "rm";
  btnEl.setAttribute("data-todo-id", id);
  return btnEl;
};

export const createLi = (text: string, id: string) => {
  const liEl = document.createElement("li");
  const spanEl = createLabel(text);
  const rmBtn = createRemoveButton(id);
  [spanEl, rmBtn].forEach((el) => {
    liEl.appendChild(el);
  });
  return liEl;
};
