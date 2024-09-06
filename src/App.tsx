import { useState } from 'react';
import './App.css';
import AddTodoButton from './components/AddTodoButton';
import AddTodoInput from './components/AddTodoInput';
import TodoList from './components/TodoList';
import { TodosType } from './types/TodosType.ts';

function App() {
	const [todos, setTodos] = useState<TodosType[]>([]);
	const [inputText, setInputText] = useState<string>('');

	return (
		<div className='container flex flex-col justify-center gap-8 m-auto p-8'>
			<div className='flex justify-center gap-4'>
				<AddTodoInput inputText={inputText} setInputText={setInputText} />
				<AddTodoButton
					todos={todos}
					setTodos={setTodos}
					inputText={inputText}
					setInputText={setInputText}
				/>
			</div>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
