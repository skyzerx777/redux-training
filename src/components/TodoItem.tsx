import { useContext } from 'react';
import { TodosContext, TodosContextType } from '../App';
import { TodosType } from '../types/TodosType';

export default function TodoItem({ id, text, completed }: TodosType) {
	const { todos, setTodos } = useContext(TodosContext) as TodosContextType;

	const toggleTodoCompleted = () => {
		setTodos(
			todos.map((item: TodosType) => {
				if (item.id === id) {
					return { id, text, completed: !completed };
				}
				return item;
			})
		);
		console.log(todos);
	};
	const deleteTodo = () => {
		setTodos(todos.filter((item: TodosType) => item.id !== id));
	};
	return (
		<div className='flex gap-4'>
			<input
				type='checkbox'
				checked={completed}
				onChange={toggleTodoCompleted}
			/>
			<p>{text}</p>
			<span className='text-red-600 cursor-pointer' onClick={deleteTodo}>
				&#215;
			</span>
		</div>
	);
}
