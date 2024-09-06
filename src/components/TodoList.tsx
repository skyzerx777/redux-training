import { useContext } from 'react';
import { TodosContext, TodosContextType } from '../App';
import { TodosType } from '../types/TodosType';
import TodoItem from './TodoItem';

export default function TodoList() {
	const { todos } = useContext(TodosContext) as TodosContextType;
	return (
		<ul className='flex flex-col justify-center items-center'>
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
