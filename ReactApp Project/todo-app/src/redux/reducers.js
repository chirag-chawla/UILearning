// src/redux/reducers.js
const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: action.payload.text,
              completed: false,
            },
          ],
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
  