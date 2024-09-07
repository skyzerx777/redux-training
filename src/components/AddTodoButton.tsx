import { useDispatch, useSelector } from 'react-redux';
import { clearInputText } from '../store/inputTextSlice';
import { RootState } from '../store/store.ts';
import { addTodo } from '../store/todosSlice';
export default function AddTodoButton() {
	const dispatch = useDispatch();
	const inputText = useSelector((state: RootState) => state.inputText);
	const handleClick = () => {
		dispatch(addTodo(inputText));
		dispatch(clearInputText());
	};
	return (
		<button className='border-2 border-black px-4' onClick={handleClick}>
			Add
		</button>
	);
}
