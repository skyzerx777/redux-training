import { TodosType } from '../types/TodosType';
import TodoItem from './TodoItem';

type PropsType = {
	todos: TodosType[];
	setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
};
export default function TodoList({ todos, setTodos }: PropsType) {
	return (
		<ul className='flex flex-col justify-center items-center'>
			{todos.map(item => (
				<TodoItem
					key={item.id}
					id={item.id}
					text={item.text}
					completed={item.completed}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</ul>
	);
}
