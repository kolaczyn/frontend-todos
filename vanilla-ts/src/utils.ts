export const generateId = () => Math.random().toString().slice(2, 6);

export const createLi = (text: string) => {
  const liElement = document.createElement("li");
  liElement.innerText = text;

  return liElement;
};
