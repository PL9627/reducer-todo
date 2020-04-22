export const initialState = {
    todo: "Learn to use reducers",
    completed: false,
    id: 1
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTodo = {
                todo: action.payload,
                completed: false,
                id: Date.now()
            }

            return {
                ...state, todo: [...state.todo, newTodo]
            };

        case "TOGGLE_TODO":
            return {
                ...state, todo: state.todo.map(item => {
                    {item.id === action.payload ? !item.completed : item}
                })
            }

        default:
            return state;
    }
};