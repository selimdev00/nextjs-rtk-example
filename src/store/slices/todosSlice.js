import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = todosSlice.actions;

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();
      dispatch(setItems(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const selectTodos = (state) => {
  return state.todos.items;
};

export default todosSlice.reducer;
