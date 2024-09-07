import { useState } from 'react';
import './App.css';
import AddTodoButton from './components/AddTodoButton';
import AddTodoInput from './components/AddTodoInput';
import TodoList from './components/TodoList';
function App() {
	const [inputText, setInputText] = useState('');
	return (
		<div className='container flex flex-col justify-center gap-8 m-auto p-8'>
			<div className='flex justify-center gap-4'>
				<AddTodoInput inputText={inputText} setInputText={setInputText} />
				<AddTodoButton inputText={inputText} setInputText={setInputText} />
			</div>
			<TodoList />
		</div>
	);
}

export default App;
