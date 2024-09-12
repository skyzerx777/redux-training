import { useSelector } from 'react-redux';
import { handleTextChanging } from '../store/inputTextSlice';
import { RootState, useAppDispatch } from '../store/store';

export default function AddTodoInput() {
	const dispatch = useAppDispatch();
	const text = useSelector((state: RootState) => state.inputText);
	return (
		<label className='flex gap-4'>
			<span>Enter your task:</span>
			<input
				type='text'
				className='w-48 border-2 border-black px-2'
				value={text}
				onChange={e => dispatch(handleTextChanging(e.target.value))}
			/>
		</label>
	);
}
