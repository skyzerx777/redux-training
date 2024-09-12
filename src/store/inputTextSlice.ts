import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const inputTextSlice = createSlice({
	name: 'inputText',
	initialState,
	reducers: {
		handleTextChanging: (_, { payload }) => {
			return payload;
		},
		clearInputText: () => {
			return '';
		},
	},
});

export default inputTextSlice.reducer;
export const { handleTextChanging, clearInputText } = inputTextSlice.actions;
