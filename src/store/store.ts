import { configureStore } from '@reduxjs/toolkit';
import inputTextReducer from './inputTextSlice';
import todosReducer from './todosSlice';
export const store = configureStore({
	reducer: { todos: todosReducer, inputText: inputTextReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
