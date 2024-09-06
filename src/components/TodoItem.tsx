import { TodosType } from '../types/TodosType';

type PropsType = {
	id: string;
	text: string;
	completed: boolean;
	todos: TodosType[];
	setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
};

export default function TodoItem({
	id,
	text,
	completed,
	todos,
	setTodos,
}: PropsType) {
	const toggleTodoComplete = () => {
		setTodos(
			todos.map((item: TodosType) => {
				if (item.id === id) {
					return {
						id,
						text,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	const deleteTodo = () => {
		setTodos(todos.filter((item: TodosType) => item.id !== id));
	};

	return (
		<li className='flex gap-4'>
			<input
				type='checkbox'
				checked={completed}
				onChange={toggleTodoComplete}
			/>
			<p>{text}</p>
			<span className='text-red-600 cursor-pointer' onClick={deleteTodo}>
				&#215;
			</span>
		</li>
	);
}
