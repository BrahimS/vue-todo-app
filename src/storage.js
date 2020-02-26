const TODO_KEY = "todo-items";

function saveToLocalStorage(items) {
  localStorage.setItem(TODO_KEY, JSON.stringify(items));
}

function getItemFromLocalStorage() {
  let json = localStorage.getItem(TODO_KEY);
  if (!json) {
    return [];
  } else {
    return JSON.parse(json);
  }
}

function generateId() {
  return `${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}

export default {
  getNewTodos() {
    let items = getItemFromLocalStorage();
    items.forEach(value => {
      if (value.dueDate) {
        value.dueDate = new Date(value.dueDate);
      }
    });
    return items;
  },
  addItem(title, dueDate) {
    let todo = {
      id: generateId(),
      title
    };
    if (dueDate) {
      let parts = dueDate.split("-");
      todo.dueDate = new Date(parts[0], parts[1] - 1, parts[2]);
    }

    let items = getItemFromLocalStorage();
    items.push(todo);
    saveToLocalStorage(items);
  },
  markAsCompleted(id) {
    let items = getItemFromLocalStorage();
    let item = items.find(el => el.id === id);
    item.completed = true;
    saveToLocalStorage(items);
  }
};
