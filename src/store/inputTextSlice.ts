import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

export const inputTextSlice = createSlice({
	name: 'inputText',
	initialState,
	reducers: {
		changeInputText: (_, { payload }) => payload,
		clearInputText: () => '',
	},
});

export const { changeInputText, clearInputText } = inputTextSlice.actions;
export default inputTextSlice.reducer;
