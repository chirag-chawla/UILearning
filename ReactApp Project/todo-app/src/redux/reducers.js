// src/redux/reducers.js
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate ? new Date(action.payload.dueDate) : '',
        priority: action.payload.priority,
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo].sort((a, b) =>
          a.priority === 'high' ? -1 : 1
        ),
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
