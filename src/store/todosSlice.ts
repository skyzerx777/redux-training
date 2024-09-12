import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TodosType } from '../types/TodosType';
import { clearInputText } from './inputTextSlice';
import { RootState } from './store';

type StateType = {
	todos: TodosType[];
	status: 'loading' | 'resolved' | 'rejected' | null;
	error: string | null;
};
const initialState: StateType = {
	todos: [],
	status: null,
	error: null,
};

export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			);
			if (!response.ok) {
				throw new Error('Server error');
			}
			const data = response.json();
			return data;
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);

export const deleteTodo = createAsyncThunk(
	'todos/deleteTodo',
	async (id: number, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${id}`,
				{
					method: 'DELETE',
				}
			);
			if (!response.ok) {
				throw new Error('Server error');
			}
			dispatch(removeTodo(id));
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);

export const toggleCompletedTodo = createAsyncThunk(
	'todos/toggleCompletedTodo',
	async (id: number, { rejectWithValue, dispatch, getState }) => {
		const state = getState() as RootState;
		const todo = state.todos.todos.find((item: TodosType) => item.id === id);
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						completed: !todo?.completed,
					}),
				}
			);
			if (!response.ok) {
				throw new Error('Server error');
			}
			dispatch(toggleStatus(id));
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);

export const addNewTodo = createAsyncThunk(
	'todos/addNewTodo',
	async (text: string, { rejectWithValue, dispatch }) => {
		const todo = {
			title: text,
			userId: 1,
			completed: false,
		};
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/todos/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(todo),
				}
			);
			if (!response.ok) {
				throw new Error('Server error');
			}
			dispatch(addTodo(todo));
			dispatch(clearInputText());
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		removeTodo: (state, { payload }) => {
			state.todos.splice(
				state.todos.findIndex(item => item.id === payload),
				1
			);
		},
		toggleStatus: (state, { payload }) => {
			const toggledTodo = state.todos.find(item => item.id === payload);
			if (toggledTodo) {
				toggledTodo.completed = !toggledTodo.completed;
			}
		},
		addTodo: (state, { payload }) => {
			state.todos.push(payload);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchTodos.fulfilled, (state, { payload }) => {
				state.status = 'resolved';
				state.todos = payload;
			})
			.addCase(fetchTodos.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = (payload as string) || 'Couldn`t fetch data';
			})
			.addCase(deleteTodo.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = (payload as string) || 'Couldn`t delete data';
			})
			.addCase(toggleCompletedTodo.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = (payload as string) || 'Couldn`t update data';
			})
			.addCase(addNewTodo.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = (payload as string) || 'Couldn`t add data';
			});
	},
});

export default todosSlice.reducer;
export const { removeTodo, toggleStatus, addTodo } = todosSlice.actions;
