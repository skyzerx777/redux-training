import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { fetchTodos } from '../store/todosSlice';
import { TodosType } from '../types/TodosType';
import TodoItem from './TodoItem';

export default function TodoList() {
	const dispatch = useAppDispatch();
	const data = useSelector((state: RootState) => state.todos);
	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);
	return (
		<>
			<ul className='flex flex-col items-center justify-center'>
				{data.status === 'loading' ? <h2>Loading...</h2> : ''}
				{data.status === 'rejected' ? (
					<h2>Something went wrong. {data.error}</h2>
				) : (
					''
				)}
				{data.todos.map((item: TodosType) => (
					<TodoItem
						key={item.id}
						id={item.id}
						title={item.title}
						completed={item.completed}
					/>
				))}
			</ul>
		</>
	);
}
