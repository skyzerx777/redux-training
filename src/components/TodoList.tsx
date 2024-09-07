import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TodosType } from '../types/TodosType';
import TodoItem from './TodoItem';

export default function TodoList() {
	const todos = useSelector((state: RootState) => state.todos);
	return (
		<ul className='flex flex-col items-center justify-center'>
			{todos.map((item: TodosType) => (
				<TodoItem
					key={item.id}
					id={item.id}
					text={item.text}
					completed={item.completed}
				/>
			))}
		</ul>
	);
}
