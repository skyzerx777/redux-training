import { useAppDispatch } from '../store/store';
import { deleteTodo, toggleCompletedTodo } from '../store/todosSlice';

type PropsType = {
	id: number;
	title: string;
	completed: boolean;
};

export default function TodoItem({ id, title, completed }: PropsType) {
	const dispatch = useAppDispatch();
	return (
		<li className='flex gap-4'>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => dispatch(toggleCompletedTodo(id))}
			/>
			<p>{title}</p>
			<span
				className='text-red-600 cursor-pointer'
				onClick={() => dispatch(deleteTodo(id))}
			>
				&#215;
			</span>
		</li>
	);
}
