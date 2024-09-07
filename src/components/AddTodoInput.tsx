import { useDispatch, useSelector } from 'react-redux';
import { changeInputText } from '../store/inputTextSlice';
import { RootState } from '../store/store.ts';

export default function AddTodoInput() {
	const inputText = useSelector((state: RootState) => state.inputText);
	const dispatch = useDispatch();
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeInputText(e.target.value));
	};
	return (
		<label className='flex gap-4'>
			<span>Enter your task:</span>
			<input
				type='text'
				className='w-48 border-2 border-black px-2'
				value={inputText}
				onChange={handleInput}
			/>
		</label>
	);
}
