// src/redux/actions.js
export const addTodo = (title, description, dueDate, priority) => ({
  type: 'ADD_TODO',
  payload: {
    title,
    description,
    dueDate,
    priority,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
