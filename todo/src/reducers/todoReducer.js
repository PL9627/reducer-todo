export const initialState = {
    todo: "Learn to use reducers",
    completed: false,
    id: 1
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTodo = {
                todo: "",
                completed: false,
                id: Date.now()
            }

            return {
                ...state, todo: [...state.todo, newTodo]
            }

        default:
            return state;
    }
};