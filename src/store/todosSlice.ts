import { createSlice } from '@reduxjs/toolkit';
import { TodosType } from '../types/TodosType';
const initialState: TodosType[] = [];

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			if (payload.trim().length) {
				state.push({
					id: new Date().toISOString(),
					text: payload,
					completed: false,
				});
			}
		},
		deleteTodo: (state, { payload }) => {
			state.splice(
				state.findIndex(item => item.id === payload.id),
				1
			);
		},
		toggleTodoCompleted: (state, { payload }) => {
			const toggledTodo = state.find(item => item.id === payload.id);
			if (toggledTodo) {
				toggledTodo.completed = !toggledTodo.completed;
			}
		},
	},
});

export const { addTodo, deleteTodo, toggleTodoCompleted } = todosSlice.actions;
export default todosSlice.reducer;
