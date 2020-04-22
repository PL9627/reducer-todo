export const initialState = {
    item: "Learn to use reducers",
    completed: false,
    id: Date.now()
};

export const todoReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};