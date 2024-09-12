import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { addNewTodo } from '../store/todosSlice';

export default function AddTodoButton() {
	const dispatch = useAppDispatch();
	const text = useSelector((state: RootState) => state.inputText);
	return (
		<button
			className='border-2 border-black px-4'
			onClick={() => dispatch(addNewTodo(text))}
		>
			Add
		</button>
	);
}
