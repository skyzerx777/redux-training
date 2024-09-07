import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoCompleted } from '../store/todosSlice';

type PropsType = {
	id: string;
	text: string;
	completed: boolean;
};
export default function TodoItem({ id, text, completed }: PropsType) {
	const dispatch = useDispatch();
	return (
		<li className='flex gap-4'>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => dispatch(toggleTodoCompleted({ id }))}
			/>
			<p>{text}</p>
			<span
				className='text-red-600 cursor-pointer'
				onClick={() => dispatch(deleteTodo({ id }))}
			>
				&#215;
			</span>
		</li>
	);
}
